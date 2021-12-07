import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Main from './2_styling/Main';
import Count from './1_basic/Count';
import Navbar from './Navbar/Navbar';
import Marquee from './4_gender/Marquee';
import AppPredictGender from './4_gender/App';

class Component extends React.Component {
    render() {
        return(
            <div>
                <Router>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        {/* <Route path="/news" element={} /> */}
                        <Route path="/count" element={<Count />} />
                        <Route path="/predict" element={<><Marquee /><AppPredictGender /></>} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default Component;