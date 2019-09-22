import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'
import axios from 'axios'

class TodoList extends Component {
  constructor (props) {
    super (props)
    this.state = {
      inputValue: 'hello',
      list: []
    }
    this.changeInput = this.changeInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleDel = this.handleDel.bind(this)
  }
  // // 在组件即将挂载前执行
  // UNSAFE_componentWillMount () { // 原叫componentWillMoun
  //   console.log('componentWillMount：在组件即将挂载前执行')
  // }
  // // 组件挂载完后执行
  // componentDidMount () {
  //   console.log('componentDidMount:组件挂载完后执行')
  // }
  // // 组件更新前执行
  // shouldComponentUpdate () {
  //   console.log('shouldComponentUpdate: 组件更新前执行')
  //   return true // 是否更新组件（=\=> componentWillUpdate =\=> render）
  // }
  // // shouldComponentUpdate 返回true才执行
  // UNSAFE_componentWillUpdate () {
  //   console.log('componentWillUpdate')
  // }
  // // 组件更新后执行
  // componentDidUpdate () {
  //   console.log('componentDidUpdate: 组件更新完毕')
  // }
  // // 接收到props执行
  // UNSAFE_componentWillReceiveProps  () {
  //   console.log('componentWillReceiveProps:接收到props执行')
  // }
  render () {
    console.log('parent render函数')
    return (
      <Fragment>
        <div>
          <label htmlFor="inputid">label</label>
          <input
            id="inputid"
            className="input"
            onChange={this.changeInput}
            value={this.state.inputValue}
            placeholder="To Do Some Things"></input>
          <button
            onClick={this.handleClick}>提交</button>
        </div>
        <ul ref={ul => this.ul = ul}>
          {this.getTodoItem()}
          {/* {
            // this.state.list.map((item, index) => <li key={index} onClick={this.handleDel.bind(this, index)}>{item}</li>)
            this.state.list.map((item, index) => {
              // return (
              //   <li
              //     key={index}
              //     onClick={this.handleDel.bind(this, index)}
              //     dangerouslySetInnerHTML={{__html: item}}></li>
              // )
              return (
                <TodoItem
                  key={'todoitem' + index}
                  content={item}
                  idx={index}
                  deleteItem={this.handleDel}/>
              )
            })
          } */}
        </ul>
      </Fragment>
    )
  }
  // componentDidMount () {
  //   axios.get('http://localhost:888/todolist').then((res, req) => {
  //     console.log(res)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }
  getTodoItem () {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={'todoitem' + index}
          content={item}
          idx={index}
          deleteItem={this.handleDel}/>
      )
    })
  }
  changeInput (evt) {
    const value = evt.target.value
    this.setState(() => ({inputValue: value}))
    // this.setState({
    //   inputValue: evt.target.value
    // })
  }
  handleClick (evt) {
    this.setState((preState) => ({
      list: [...preState.list, preState.inputValue],
      inputValue: ''
    }), () => {
      // setState是伊布函数, 第二个参数等待setState执行完执行
      console.log(this.ul.querySelectorAll('li').length) // setState是伊布函数，这里执行有先后顺序问题
    })
    // console.log(this.ul.querySelectorAll('li').length) // setState是伊布函数
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
  }
  handleDel (index) {
    let list = [...this.state.list]
    list.splice(index, 1)
    this.setState(() => ({list}))
    // this.setState({
    //   list
    // })
  }
}

export default TodoList