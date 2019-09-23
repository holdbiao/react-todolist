import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {Input, Button, List, } from 'antd'

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ]

class AntdRedux extends Component {
    render () {
        return (
            <div style={{padding: '20px'}}>
                <Input placeholder="to do info" style={{width: '300px'}}></Input>
                <Button type="primary" style={{marginLeft: '10px'}}>提交</Button>
                <List
                    style={{'marginTop': '50px'}}
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>{item}</List.Item>
                    )}
                />
            </div>
        )
    }
}

export default AntdRedux