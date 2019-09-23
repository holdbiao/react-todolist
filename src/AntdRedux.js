import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store'
import AntdReduxUI from './AntdReduxUI'

class AntdRedux extends Component {
    constructor (props) {
        super (props)
        this.state = store.getState()
        this.handleInput = this.handleInput.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.handleItemDel = this.handleItemDel.bind(this)
        this.handleStateChange = this.handleStateChange.bind(this)
        store.subscribe(this.handleStateChange)
    }
    render () {
        return (
            <AntdReduxUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInput={this.handleInput}
                handleButtonClick={this.handleButtonClick}
                handleItemDel={this.handleItemDel}
                ></AntdReduxUI>
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
        // console.log('store change')
        this.setState(store.getState())
    }
    handleButtonClick () {
        const action = {
            type: 'add_list_item'
        }
        store.dispatch(action)
    }
    handleItemDel (index) {
        // console.log('del:', index)
        const action = {
            type: 'del_list_item',
            value: index
        }
        store.dispatch(action)
    }
}

export default AntdRedux