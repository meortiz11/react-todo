var express = require('express');
var router = express.Router();
var store = require('../store')

/* GET users listing. */
router.get('/', function(req, res, next) {
  var users = store.users
  var allUsers = Object.keys(users).reduce(function(a, b) {
    a.push(users[b])
    return a
  }, [])
  res.send(allUsers);
});

router.get('/:id/todos', function(req, res, next) {
  var userId = req.params.id
  var usersTodos = []
  var user = store.user[userId]
  Object.keys(store.todos).forEach(function(id) {
    var todo = store.todos[id];
    if(todo.ownerId == userId) {
      todo.owner = user
      usersTodos.push(todo)
    }
  })

  res.send(usersTodos);
});

module.exports = router;
