export const addTodo = text => ({ type: 'newTodo', text })
export const deleteTodo = id => ({ type: 'deleteTodo', id })
export const toggleTodo = id => ({ type: 'toggleTodo',id})
