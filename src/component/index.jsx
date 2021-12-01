import React from 'react';
import TodoHeader from './TodoHeader';
import TodoApp from './TodoApp';
import TodoFooter from './TodoFooter';

class Component extends React.Component {
    render() {
        return(
            <div>
                <TodoHeader/>
                <TodoApp/>
                <TodoFooter/>
            </div>
        )
    }
}

export default Component;