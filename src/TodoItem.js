import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleDel = this.handleDel.bind(this) // 节约性能
  }
  // // 一个组件要从父组件接收参数
  // // 只要父组件的render函数重新执行后执行此函数
  // // 如果这个组件第一次存在于父组件中，不执行
  // // 如果这个组件之前就存在于父组件中，执行
  // UNSAFE_componentWillReceiveProps  () {
  //   console.log('componentWillReceiveProps: todoitem')
  // }
  // componentWillUnmount () {
  //   console.log('componentWillUnmount: 组件卸载')
  // }
  shouldComponentUpdate (nextProps, nextState) { // 性能优化，避免父组件render影响,减少渲染
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }
  render () {
    console.log('child render函数')
    const { content } = this.props
    return (
      <li onClick={this.handleDel}>{content}</li>
    )
  }
  handleDel () {
    const { deleteItem, idx } = this.props
    deleteItem(idx)
  }
}

// 定义props数据类型
TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  deleteItem: PropTypes.func,
  idx: PropTypes.number
}
TodoItem.defaultProps = {
  content: 'default'
}
export default TodoItem;