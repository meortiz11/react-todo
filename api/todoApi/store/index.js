var lastUserId = 2;
var lastTodoId = 3;

module.exports = {
  users: {
    1: {firstName: 'Mike', lastName: 'Ortiz', id: 1, avatarUrl: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p50x50/12122678_662921350410990_7643630646256577880_n.jpg?oh=625fc61e105c4f64e84f556ea6e4691a&oe=58A6666B'},
    2: {firstName: 'Emanuel', lastName: 'Arambula', id: 2, avatarUrl: 'https://avatars2.githubusercontent.com/u/5543210?v=3&s=466'}
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
