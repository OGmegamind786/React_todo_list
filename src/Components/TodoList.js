import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default class TodoList extends Component {
  state = {
    todos: [],
    todosToDisplay: "all",
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          //needs to update
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  updateTodoToDisplay = (s) => {
    this.setState({
      todosToDisplay: s,
    });
  };

  handleDeleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  removeTodosThatAreComplete = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.complete),
    });
  };

  render() {
    let todos = [];

    if (this.state.todosToDisplay === "all") {
      todos = this.state.todos;
    } else if (this.state.todosToDisplay === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todosToDisplay === "complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        <div>
          <button onClick={() => this.updateTodoToDisplay("all")}>All</button>
          <button onClick={() => this.updateTodoToDisplay("active")}>
            Active
          </button>
          <button onClick={() => this.updateTodoToDisplay("complete")}>
            Complete
          </button>
        </div>
        <div>
          Todos left :{" "}
          {this.state.todos.filter((todo) => !todo.complete).length}
        </div>

        {todos.map((todo) => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            deleteTodo={() => this.handleDeleteTodo(todo.id)}
            todo={todo}
          />
        ))}
        {this.state.todos.some((todo) => todo.complete) ? (
          <div>
            <button onClick={this.removeTodosThatAreComplete}>
              Remove Completed Todos
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}
