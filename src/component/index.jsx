import React from 'react';
import Count from './1_basic/Count';
import Footer from './1_basic/Footer';
import Header from './1_basic/Header';


class Component extends React.Component {
    render() {
        return(
            <div>
                <Header nama="Eduwork"/>
                <Count/>
                <Footer/>
            </div>
        )
    }
}

export default Component;