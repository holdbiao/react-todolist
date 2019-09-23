import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './App.css'

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      list: ['item', 'item']
    }
    this.handleToggle = this.handleToggle.bind(this)
  }
  render () {
    return (
      <Fragment>
        <TransitionGroup>
            {
              this.state.list.map((item, index) => {
                return (
                  <CSSTransition
                    timeout={1000}
                    classNames="fade"
                    unmountOnExit
                    appear={true}
                    key={index}>
                    <div>{item}</div>
                  </CSSTransition>
                )
              })
            }
        </TransitionGroup>
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    )
  }
  handleToggle () {
    this.setState((preState) => ({
      list: [...preState.list, 'item']
    }))
  }
}

export default App;
