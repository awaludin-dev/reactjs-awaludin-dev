// import React from 'react';

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

const Header = ({nama}) => {
    return(
        <div>
            <header>
                <h1>{nama}</h1>
            </header>
        </div>
    )
}

Header.defaultProps = {
    nama: 'Awaludin',
}
export default Header;