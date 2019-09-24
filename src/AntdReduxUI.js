import React from 'react'
import {Input, Button, List, } from 'antd'

// 无状态组件, 没了render函数，提高性能的一个方法
const AntdReduxUI = (props) => {
    return (
        <div style={{padding: '20px'}}>
            <Input
                value={props.inputValue}
                placeholder="to do info"
                style={{width: '300px'}}
                onChange={props.handleInput}></Input>
            <Button
                type="primary"
                style={{marginLeft: '10px'}}
                onClick={props.handleButtonClick}>提交</Button>
            <List
                style={{'marginTop': '20px', width: '300px'}}
                header={<div>To do List</div>}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item onClick={() => {props.handleItemDel(index)}}>{item}</List.Item>
                )}
            />
        </div>
    )
}

export default AntdReduxUI