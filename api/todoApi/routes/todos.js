var express = require('express');
var router = express.Router();
var store = require('../store')


/* GET users listing. */
router.get('/', function(req, res, next) {
  var todos = store.todos
  var allTodos = Object.keys(todos).reduce(function(a, b) {
    var todo = todos[b]
    store.getTodoOwner(todo);
    a.push(todo)
    return a
  }, [])
  res.send(allTodos);
});

router.get('/:id', function(req, res, next) {
  var todo = store.todos[req.params.id]
  res.send(store.getTodoOwner(todo));
});


router.put('/:id', function(req, res, next) {
  var todo = store[req.params.id]
  todo = req.body
  res.send(store.getTodoOwner(todo));
});


router.post('/', function(req, res, next) {
  res.send(store.createTodo(req.body))
});


router.delete('/:id', function(req, res, next) {
  delete store.todos[req.params.id]
  res.send('todo deleted')
});

module.exports = router;
