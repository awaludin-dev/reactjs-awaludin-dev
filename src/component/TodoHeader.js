/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import Typed from 'react-typed';

class TodoHeader extends React.Component  {
    render(){
        return(
            <div>
                <marquee className="marquee"><span className="red">WARNING!!!</span> Aplikasi website menebak umur dari nama anda <span className="red">WARNING!!!</span></marquee>
                <br/><br/><Typed className="typed"
                    strings={['Predict Your Gender', 'By Your Name']}
                    typeSpeed={60}
                    backSpeed={60}
                    loop={1}
                />
            </div>
        );
    }
}

export default TodoHeader;