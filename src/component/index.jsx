import React from 'react';
import Footer from './2_styling/Footer';
import Header from './2_styling/Header';
import Main from './2_styling/Main';


class Component extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}

export default Component;