import React from 'react';

class Count extends React.Component {
    state = {
        angka: 0,
    }

    addAngka = () => {
        this.setState({ angka: this.state.angka+1 })
    }

    minusAngka = () => {
        if(this.state.angka > 0){
            this.setState({ angka: this.state.angka-1 })
        }
    }

    render() {
        return(
            <div>
                <main>
                    <h3>Angka</h3>
                    <button onClick={this.minusAngka}>-</button>
                    <span>{'  '}{this.state.angka}{'  '}</span>
                    <button onClick={this.addAngka}>+</button>
                </main>
            </div>
        )
    }
}

Count.call();
// export default Count;