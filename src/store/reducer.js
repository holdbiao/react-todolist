const defaultState = {
    inputValue: '',
    list: ['1', '2']
}

// reducer 可以接收state,但是不能直接修改state
export default (state = defaultState, action) => {
    // console.log(state, action)
    if (action.type === 'change_input_value') {
        const newState = {...state}
        newState.inputValue = action.value
        return newState
    }
    if (action.type === 'add_list_item') {
        const newState = {...state}
        newState.list = [...state.list, state.inputValue]
        newState.inputValue = ''
        return newState
    }
    if (action.type === 'del_list_item') {
        // console.log(action.value, state)
        const newState = {...state}
         newState.list.splice(action.value, 1)
        return newState
    }

    return state
}