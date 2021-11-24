// import React from 'react'

// class Footer extends React.Component {
//     render(){
//         return(
//             <div>
//                 <footer>
//                     <h3>© {this.props.nama} - All right reserved</h3>
//                 </footer>
//             </div>
//         )
//     }
// }

const Footer = (props) => {
    return(
        <div>
            <footer>
                <h3>© {props.nama} - All right reserved</h3>
            </footer>
        </div>
    )
}

Footer.defaultProps = {
    nama: 'Awaludin',
}
// export default Footer