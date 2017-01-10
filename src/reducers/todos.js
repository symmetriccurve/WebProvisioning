
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
      //console.log('Returing State',state);
      return state

    case 'deleteTodo':
        var newTodos = []
        for(var key in state.allTodos) {
            if(action.id != state.allTodos[key].id){
                newTodos.push(state.allTodos[key])
            }
        }
        var state = {
            allTodos : newTodos,
            fetchStatus : state.fetchStatus
        }
      return state

      case 'toggleTodo':
          var newTodos = []
          for(var key in state.allTodos) {
              if(action.id == state.allTodos[key].id){
                  newTodos.push({
                      todo: state.allTodos[key].todo,
                      status: !state.allTodos[key].status,
                      id: state.allTodos[key].id
                  })
              } else {
                  newTodos.push( state.allTodos[key])
              }
          }
          var state = {
              allTodos : newTodos,
              fetchStatus : state.fetchStatus
          }
        return state

    default:
        return state
  }
        return state
}
