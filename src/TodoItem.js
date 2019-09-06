import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleDel = this.handleDel.bind(this) // 节约性能
  }
  render () {
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
  content: PropTypes.string.isRequired,
  deleteItem: PropTypes.func,
  idx: PropTypes.number
}
TodoItem.defaultProps = {
  content: 'default'
}
export default TodoItem;