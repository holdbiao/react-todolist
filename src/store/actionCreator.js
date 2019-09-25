import { INIT_LIST_ACTION } from './actionTypes'

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

export const getTodoList = () => {
  return (dispatch) => { // 使用后这里可以返回方法,并接收到dispatch
    // 这里写异步请求
    const data = ['1', '2', '3', '4', '5']
    const action = initListAction(data)
    dispatch(action)
  }
}