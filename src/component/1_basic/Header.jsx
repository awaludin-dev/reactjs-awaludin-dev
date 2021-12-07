import React from 'react';
import {
    Link
} from 'react-router-dom';

// class Header extends React.Component {
//     render() {
//         return(
//             <div>
//                 <header>
//                     <h1>{this.props.nama}</h1>
//                 </header>
//             </div>
//         )
//     }
// }

// const Header = ({nama}) => {
//     return(
//         <div>
//             <header>
//                 <h1>{nama}</h1>
//             </header>
//         </div>
//     )
// }

// Header.defaultProps = {
//     nama: 'Awaludin',
// }

const Header = () => {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/count">Count</Link>
        </nav>
    )
}

export default Header;