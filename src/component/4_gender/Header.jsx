/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';

class TodoHeader extends React.Component  {
    render(){
        return(
            <div>
                <marquee className="marquee"><span className="red">WARNING!!!</span> this web display a popular news from indonesia and search your news by keyword <span className="red">WARNING!!!</span></marquee>
            </div>
        );
    }
}

export default TodoHeader;