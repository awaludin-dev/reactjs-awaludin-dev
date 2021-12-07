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
        const style={
            padding: '8px 12px'
        }

        return(
            <div style={{display: 'flex', width: '96vw', height: '90vh', alignItems: 'center', justifyContent: 'center'}}>
                <main style={{margin: 0, display: 'block', textAlign: 'center'}}>
                    <h1>Angka</h1>
                    <h2 style={{fontSize: '24px'}}>
                    <button onClick={this.minusAngka} style={style}>-</button>
                    {'  '}{this.state.angka}{'  '}
                    <button onClick={this.addAngka} style={style}>+</button>
                    </h2>
                </main>
            </div>
        )
    }
}

export default Count;