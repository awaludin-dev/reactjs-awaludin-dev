import React from 'react';

class TodoApp extends React.Component {
    state = {
        todoInput: "",
        listTodo: []
    }

    inputTodo = (e) => {
        this.setState({
            todoInput: e.target.value
        })
    }
    addTodo = () => {
        this.setState({
            listTodo: [...this.state.listTodo, this.state.todoInput]
        })
    }
    render() {
        return(
            <><div class="todo-input">
                <input type="text" onChange={this.inputTodo} placeholder="Masukkan todo" />
                <button type="submit" onClick={this.addTodo}>add</button>
            </div>
            <div class="todo-list">
                <table>
                    {this.state.listTodo.map((item) => {
                        return (
                            <tr>
                                <td>{item}</td>
                                <td><input type="checkbox"/></td>
                            </tr>
                        );
                    })}
                </table>
            </div></>
        );
    }
}

export default TodoApp;