
// import { Provider, connect} from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css';
require('./index.scss')
// import {createStore, combineReducers} from 'redux';
// const defaultState = [
//   {task: 'sample', isComplete: false, id: 1},
//   {task: 'another', isComplete: false, id: 2},
//   {task: 'one more', isComplete: false, id: 3}
// ]

// const userReducer = (state = {name: "Emanuel"}, action) => {
//   switch(action.type) {
//     default:
//       return state
//   }
// }

// const todoReducer = (state, action) => {
//   switch(action.type) {
//     case "ADD_TODO":
//       return {
//         task: action.task,
//         isComplete: false,
//         id: action.nextId
//       }
//     case "TOGGLE_TODO":
//       if(state.id !== action.id) return state
//       return {
//         task: state.task,
//         id: state.id,
//         isComplete: !state.isComplete
//       }
//     case "EDIT_TODO":
//       if(state.id !== action.id) return state
//       return Object.create({}, state, {task: action.task})
//     default:
//       return state
//   }
// }
// const todosReducer = (state= defaultState, action) => {
//   switch(action.type) {
//     case 'ADD_TODO':
//       action.nextId = state.length+1
//       return [
//         todoReducer(null, action),
//         ...state

//       ]
//     case 'TOGGLE_TODO':
//       return state.map(todo => todoReducer(todo, action))
//     case 'EDIT_TODO':
//       return state.map(todo => todoReducer(todo, action))
//     default:
//       return state
//   }


// }

// const todoAppReducers = combineReducers({
//   todos: todosReducer,
//   user: userReducer
// })

// // const Counter = ({
// //   value,
// //   onIncrement,
// //   onDecrement
// // }) => {
// //   return (
// //     <div>
// //       <h1>{value}</h1>
// //       <button onClick={onIncrement}>+</button>
// //       <button onClick={onDecrement}>-</button>
// //     </div>

// //   )
// // }

// const store = createStore(todoAppReducers)

// const actions = {
//   toggleTodo: (id) => {
//     return {
//       type: 'TOGGLE_TODO',
//       id: id
//     }
//   },

//   addTodo: (task) => {
//     return {
//       type: 'ADD_TODO',
//       task: task
//     }
//   }
// }

// const TodoItem = ({todo, clickFn}) => {
//   const style = todo.isComplete? {
//     textDecoration: 'line-through',
//     opacity: .5
//   }: null;
//   return (
//     <p onClick={clickFn} style={style}>{todo.task} </p>
//   )
// }

// class AddTodo extends Component {

//   addTodo(event) {
//     event.preventDefault();
//     const text = this.refs.addTodo.value;
//     if(!text.length) return;
//     this.props.action(text)
//     this.refs.addTodo.value = '';
//   }

//   render() {
//     return (
//       <form onSubmit={this.addTodo.bind(this)}>
//         <div className="form-group">
//           <input type="text" ref="addTodo" className="form-control" placeholder="Add a Todo"/>
//           <button className="btn btn-primary" hidden="true" type="submit">Add</button>
//         </div>

//       </form>
//     )
//   }
// }

// class TodoList extends Component {

//   todoList() {
//     const {toggleTodo, todos} = this.props
//     return todos.map(todo => {
//       return (
//         <TodoItem
//           key={todo.id}
//           todo={todo}
//           clickFn={() => toggleTodo(todo.id)}
//         />
//       )

//     })
//   }
//   render() {
//     const {addTodo} = this.props
//     return (
//       <div>
//         <AddTodo action={(task) => addTodo(task)}></AddTodo>
//         {this.todoList()}
//       </div>

//     )
//   }
// }


// const TodoHeader = ({user}) => {
//   return (
//     <div className="header alert alert-info">
//       {user.name}'s Todo List
//     </div>
//   )
// }

// const TodoHeaderConnector = connect(
//   (state) => {
//     return {
//       user: state.user
//     }
//   }
// )(TodoHeader)

// const TodoListConnector = connect(
//   state => {
//     return {todos: state.todos}
//   },

//   dispatch => {
//     return {
//       addTodo: (task) => {
//         dispatch(actions.addTodo(task))
//       },
//       toggleTodo: (id) => {
//         dispatch(actions.toggleTodo(id))
//       }
//     }
//   }
// )(TodoList)

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <TodoHeaderConnector/>
//         <TodoListConnector />
//       </div>
//     )
//   }
// }


// render(
//   <Provider store={store}>
//     <App />
//   </Provider>
//   ,
//   document.querySelector("#app")
// )

// window.state = store;

// // render(<App/>, document.querySelector("#app"));



import React, {Component} from 'react';
import { render } from 'react-dom';

// class App extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       user: {name: 'mike'},
//       todos: [
//         {task: 'do laundry', id: 1, isComplete: false},
//         {task: 'take out trash', id: 2, isComplete: true},
//         {task: 'get milk', id: 3, isComplete: false},
//       ]
//     }

//     this.toggleTodo = this.toggleTodo.bind(this)
//     this.addTodo = this.addTodo.bind(this)
//   }

//   toggleTodo(todo) {
//     var newState = {};
//     newState.user = this.state.user;
//     newState.todos = this.state.todos.map((item) => {
//       if(todo.id === item.id) {
//         return {
//           task: item.task,
//           id: item.id,
//           isComplete: !item.isComplete
//         }
//       }
//       return item
//     })
//     this.setState(newState)
//   }

//   addTodo(task) {
//     var newState = {};
//     newState.user = this.state.user
//     newState.todos = this.state.todos.concat({
//       task: task,
//       id: this.state.todos.length+1,
//       isComplete: false
//     })
//     this.setState(newState)
//   }

//   renderTodos() {
//     return this.state.todos.map((item) => {
//       return (
//         <TodoItem todo={item} toggleTodo={this.toggleTodo} key={item.id}/>
//       )
//     })
//   }


//   render() {
//     return (
//       <div>
//         <TodoHeader name={this.state.user.name}/>
//         <div className="todo-container">
//           <AddTodo addTodo={this.addTodo}/>
//           {this.renderTodos()}
//         </div>
//       </div>
//     )
//   }

// }


// class AddTodo extends Component {
//   constructor(props) {
//     super(props)
//     this.addTodo = this.addTodo.bind(this)
//   }

//   addTodo() {
//     var newTodo = this.refs.addTodoInput.value; // newTodo = "make bed"
//     if(newTodo) {
//       this.props.addTodo(newTodo);
//       this.refs.addTodoInput.value = ""
//     }

//   }
//   render() {
//     return (
//       <div>
//         <input placeholder="Add todo" type="text" ref="addTodoInput"/>
//         <button className="btn btn-info btn-lg" onClick={this.addTodo}>Add</button>
//       </div>
//     )
//   }
// }

// class TodoItem extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {

//     var {todo, toggleTodo} = this.props
//     var isComplete = ""
//     if(todo.isComplete) {
//       isComplete = 'is-complete'
//     }
//     return (
//       <div className={isComplete+' todo-item'}>
//         <input type="checkbox" checked={todo.isComplete} onChange={() => {
//           toggleTodo(todo)
//         }}/>
//         <span> {todo.task}</span>
//       </div>
//     )
//   }
// }


// class TodoHeader extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <div>
//         <h2>{this.props.name}'s Todos</h2>
//       </div>
//     )
//   }
// }




class App extends Component {
  constructor(props) {
    super(props)
     this.popUp=this.popUp.bind(this)
  }
  popUp (title) { 

    alert(title)
  }

  render() {
   return (
     <div>
     <h1>hello</h1>
     <Article title="test1" buttonTitle="check this out!" onButtonClick={this.popUp}/>
     <Article/>
     <Article/>
     <Article/>
     </div>
   ) 
  }
}


var Article = (props) => {
  return (
    <div>
      <span>{props.title}</span>
      <button onClick={ () => props.onButtonClick(props.title) } >{props.buttonTitle}</button>
    </div>
  )
}

// class Article extends Component{
//   constructor(props) {
//     super (props)
//   }

//   render() {
    
//     return(
//       <div>
//         <span>{this.props.title}</span>
//         <button onClick={ () => this.props.onButtonClick(this.props.title) } >{this.props.buttonTitle}</button>
//       </div>
//     )
//   }
// }

function add() {

}

var add2 = () => {

}


render(<App />, document.getElementById("app"))
