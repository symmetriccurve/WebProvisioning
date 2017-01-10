
const initialState =  {
    allTodos : [],
    fetchStatus : 'Not Fetched'
}

export default function todos(state = initialState, action) {
  console.log('New Action===>',action);
  switch (action.type) {
    case 'newTodo':

      var state = {
          allTodos : [{
            todo: action.text,
            status:false,
            id: Date.now()
          },...state.allTodos],
          fetchStatus : state.fetchStatus
      }
      console.log('Returing State',state);
      return state

    case 'deleteTodo':
        // Delete Todo
      return state

    default:
        return state
  }
        return state
}
