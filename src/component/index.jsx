import React from 'react';
import TodoHeader from './TodoHeader';
import TodoApp from './TodoApp';

class Component extends React.Component {
    render() {
        return(
            <div>
                <TodoHeader/>
                <TodoApp/>
            </div>
        )
    }
}

export default Component;