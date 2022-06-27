import React from 'react'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchStakerPublicDataAsync } from 'state/staker'
import BN from 'bignumber.js'
import { Row, Col, Card, Input, Button, notification } from 'antd'
import { useTokenContract } from 'hooks/useContract'
import { useMjtContract } from '../../hooks/useContract'
import { getMjtAddress } from 'utils/addressHelpers'
import MJT_ABI from 'constants/abi/mjt.json'
import multicall from '../../utils/multicall'

const HomePage: React.FunctionComponent = () => {
  // 连接的账号，library === provider

  const { account, library } = useWeb3React()

  // 要在react通过修改数据展示到页面中，必须通过 react.useState api设置变量
  // 定义要展示的变量
  // 定义totalSupply，修改定义totalSupply需要通过setTotalSupply函数，形如  setTotalSupply(()=>newSupply)
  const [totalSupply, setTotalSupply] = React.useState('0')

  // 定义 symbol
  const [symbol, setSymbol] = React.useState('')

  // 定义 balance
  const [balance, setBalance] = React.useState('0')

  // 定义调用合约的参数  receiver 和  amount

  const [receiver, setReceiver] = React.useState('')

  const [amount, setAmount] = React.useState('')

  // 在 hooks/useContract 查看如何新建/获取其他contract的实例
  const mjtContract = useMjtContract()

  // react.useEffect 页面初始化时候自动执行的代码段
  // mutil call 读取 symbol以及totalSupply属性

  React.useEffect(() => {
    async function getMjtProperty() {
      const multiParams = [
        {
          address: getMjtAddress(),
          name: 'totalSupply',
        },
        {
          address: getMjtAddress(),
          name: 'symbol',
        },
        {
          address: getMjtAddress(),
          name: 'symbol',
        },
      ]

      const multiRespond = await multicall(MJT_ABI, multiParams)

      console.log('multiRespond', multiRespond)

      // 更新到页面中去

      setTotalSupply(() => multiRespond[0][0].toString())
      setSymbol(() => multiRespond[1][0])
    }

    getMjtProperty()
  }, []) // 空白数组代表没有依赖，页面初始化的时候会执行

  // 普通读取属性,读取用户 balance 示例
  // react.useEffect 依赖变了自动执行的代码段
  React.useEffect(() => {
    async function getUserBalance() {
      const res = await mjtContract.functions.balanceOf(account)
      // 更新 balance 到页面中  ！！！！
      setBalance(() => res.toString())
    }

    // 执行异步函数
    if (account) {
      getUserBalance()
    }
  }, [account]) // account变了之后就会执行里面的代码段

  // 转账
  const transfer = async () => {
    // 这里暂时没有做输入检测
    try {
      const tx = await mjtContract.transfer(receiver, new BN(amount).multipliedBy(10 ** 18).toString())
      const response = await tx.wait(1)
      console.log('contract call response', response)
      notification.success({ message: 'transfer success' })
    } catch (e) {
      console.error('contract call error', e)
      notification.error({ message: 'transfer failed' })
      return { status: 0, error: e }
    }
  }

  return (
    <div style={{ margin: '200px auto', maxWidth: '1200px', color: '#000' }}>
      {/* 布局只需要使用 Row 和 Col 组件 ，详情=> https://ant.design/components/grid/ */}
      <Row>
        <Col span={12}>
          <Card>
            <Row>
              <h2>合约属性</h2>
            </Row>
            <Row>
              <Col span={6}>total supply</Col>
              <Col>{new BN(totalSupply).div(10 ** 18).toString()}</Col>
            </Row>
            <Row>
              <Col span={6}>symbol</Col>
              <Col>{symbol}</Col>
            </Row>
            <Row>
              <Col span={6}>balance</Col>
              <Col>{new BN(balance).div(10 ** 18).toString()}</Col>
            </Row>
          </Card>
        </Col>

        <Col span={12}>
          <Card>
            <Row>
              <h2>调用合约示例</h2>
            </Row>
            <Row>
              <Col span={6}>amount</Col>
              <Col span={18}>
                <Input value={amount} onChange={(e) => setAmount(() => e.target.value)} />
              </Col>
            </Row>
            <Row>
              <Col span={6}>receiver</Col>
              <Col span={18}>
                <Input value={receiver} onChange={(e) => setReceiver(() => e.target.value)} />
              </Col>
            </Row>
            <Row>
              <Button onClick={transfer}>Transfer</Button>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default HomePage
