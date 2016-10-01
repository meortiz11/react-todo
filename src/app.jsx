

// import {observable} from 'mobx'
// import {observer} from 'mobx-react'
// import DevTools from 'mobx-react-devtools';









// const todos = observable([
//   {task: 'foo', isComplete: false, editMode: false},
//   {task: 'bar', isComplete: false, editMode: false},
//   {task: 'baz', isComplete: true, editMode: false}
// ])

// window.todos = todos

// @observer
// class TodoActions extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     if(this.props.todo.isComplete) {
//       return null
//     }
//     return (
//       <div className="todo-actions">
//         <button className="btn btn-info" onClick={() => {this.props.todo.isComplete = !this.props.todo.isComplete}}>Done</button>
//       </div>
//     )
//   }
// }

// @observer
// class AddTodo extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   addTodo(event) {
//     event.preventDefault();
//     this.props.todos.push({
//       isComplete: false,
//       task: this.refs.newTodo.value,
//       editMode: false
//     })
//     this.refs.newTodo.value = ""
    
//   }

//   render() { 
//     return (
//     <form onSubmit={this.addTodo.bind(this)} className="form">
//       <input placeholder="Add a Todo" ref="newTodo"/>
//       <button className="btn btn-primary" type="submit">Add</button>
//     </form>
//   )
    
    
//   }
// }



// @observer
// class TodosList extends React.Component {
//   editTodo(refId, todo, event) {
//     event.preventDefault();
//     todo.task = this.refs[refId].value
//     todo.editMode = false

//   }

//   renderItems() {
//       return this.props.todos.map((todo, i) => {
//         const isDoneClass = todo.isComplete? 'complete': ''
//         console.log('hitting')
//         if(todo.editMode) {
//           console.log('hitting')
//           return (
//             <form className="form-group" onSubmit={this.editTodo.bind(this, `todo${i}`, todo)} key={i}>
//               <input type="text" defaultValue={todo.task} ref={`todo${i}`}/>
//               <button className="btn btn-primary" type="submit">Save</button>
//             </form>
//           )
//         }
//         return (
//           <li key={i} className={isDoneClass} >
//             <span onClick={() => {todo.editMode = true}}>{todo.task}</span>
//             <TodoActions todo={todo}/>
          
//           </li>)
//       })
//   }

//   render() {
//     return (
//       <div className='todoList'>
//         <div className='header'>
//             <h2>Todos</h2>
//         </div>

//         <ul>
//           {this.renderItems()}
//         </ul>
//         <AddTodo todos={this.props.todos}/>
//       </div>
//     )
//   }

// }
// @observer
// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <TodosList todos={todos}/>
//         <DevTools />
//       </div>
//     )
//   }
// }
