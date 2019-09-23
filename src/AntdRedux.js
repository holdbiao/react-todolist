import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {Input, Button, List, } from 'antd'
import store from './store'

class AntdRedux extends Component {
    constructor (props) {
        super (props)
        this.state = store.getState()
        this.handleInput = this.handleInput.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.handleStateChange = this.handleStateChange.bind(this)
        store.subscribe(this.handleStateChange)
    }
    render () {
        return (
            <div style={{padding: '20px'}}>
                <Input
                    value={this.state.inputValue}
                    placeholder="to do info"
                    style={{width: '300px'}}
                    onChange={this.handleInput}></Input>
                <Button
                    type="primary"
                    style={{marginLeft: '10px'}}
                    onClick={this.handleButtonClick}>提交</Button>
                <List
                    style={{'marginTop': '20px', width: '300px'}}
                    header={<div>To do List</div>}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (
                        <List.Item>{item}</List.Item>
                    )}
                />
            </div>
        )
    }
    handleInput (evt) {
        const action = {
            type: 'change_input_value',
            value: evt.target.value
        }
        store.dispatch(action)
    }
    handleStateChange () {
        console.log('store change')
        this.setState(store.getState())
    }
    handleButtonClick () {
        const action = {
            type: 'add_list_item'
        }
        store.dispatch(action)
    }
}

export default AntdRedux