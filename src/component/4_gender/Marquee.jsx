/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';

class Marquee extends React.Component  {
    render(){
        return(
            <div>
                <marquee className="marquee"><span className="red">WARNING!!!</span> this web display a popular news from indonesia and predict your gender <span className="red">WARNING!!!</span></marquee>
            </div>
        );
    }
}

export default Marquee;