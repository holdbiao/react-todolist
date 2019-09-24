import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

// const store = createStore(reducer)
const store = createStore(reducer, applyMiddleware(thunk)) // 使用redux-thunk中间件(redux的中间件)

export default store