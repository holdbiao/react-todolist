import React, { Component } from 'react'
import {Input, Button, List, } from 'antd'

class AntdReduxUI extends Component {
    render () {
        return (
            <div style={{padding: '20px'}}>
                <Input
                    value={this.props.inputValue}
                    placeholder="to do info"
                    style={{width: '300px'}}
                    onChange={this.props.handleInput}></Input>
                <Button
                    type="primary"
                    style={{marginLeft: '10px'}}
                    onClick={this.props.handleButtonClick}>提交</Button>
                <List
                    style={{'marginTop': '20px', width: '300px'}}
                    header={<div>To do List</div>}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={() => {this.props.handleItemDel(index)}}>{item}</List.Item>
                    )}
                />
            </div>
        )
    }
}

export default AntdReduxUI