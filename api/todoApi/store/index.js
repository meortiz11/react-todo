var lastUserId = 2;
var lastTodoId = 3;

module.exports = {
  users: {
    1: {firstName: 'Mike', lastName: 'Ortiz', id: 1},
    2: {firstName: 'Emanuel', lastName: 'Arambula', id: 2}
  },
  todos: {
    1: {task: 'take out the trash', ownerId: 1, id: 1},
    2: {task: 'Eat lunch', ownerId: 2, id: 2},
    3: {task: 'go to the store', ownerId: 1, id: 3},
  },

  getTodoOwner: function(todo) {
    todo.owner = this.users[todo.ownerId]
    return todo
  },

  createTodo: function(data) {
    lastTodoId++
    data.id = lastTodoId
    this.getTodoOwner(data)
    this.todos[lastTodoId] = data
    return this.todos[lastTodoId]
  }
}
