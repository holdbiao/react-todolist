import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

class TodoList extends Component {
  constructor (props) {
    super (props)
    this.state = {
      inputValue: 'hello',
      list: ['学习react', '学习vue']
    }
    this.changeInput = this.changeInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleDel = this.handleDel.bind(this)
  }
  render () {
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
        <ul>
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
    }))
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