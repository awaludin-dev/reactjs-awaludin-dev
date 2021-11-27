import React from "react";

export default class Contact extends React.Component {
    state = {
        nama: '',
        email: '',
        noHP: '',
        message: '',
        errors: [],
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {nama, email, noHP, message} = this.state;

        let messageErrors = [];

        if(nama.length === 0) {
            messageErrors = [...messageErrors, 'Nama tidak boleh kosong'];
        } else if(nama.length < 4) {
            messageErrors = [...messageErrors, 'Nama terlalu pendek'];
        }

        if(email.length === 0) {
            messageErrors = [...messageErrors, 'Email tidak boleh kosong'];
        } else {
            const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(!re.test(String(email).toLowerCase())) {
                messageErrors = [...messageErrors, 'Email tidak valid'];
            }
        }

        if(noHP.length === 0) {
            messageErrors = [...messageErrors, 'No HP tidak boleh kosong'];
        } else {
            const re = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;
            if(!re.test(noHP)) {
                messageErrors = [...messageErrors, 'No HP tidak  valid'];
            }
        }

        if(message.length === 0) {
            messageErrors = [...messageErrors, 'Pesan tidak boleh kosong'];
        }

        if(messageErrors.length > 0) {
            this.setState({
                errors: messageErrors,
            })
        } else {
            alert('Pesan berhasil dikirim');
            this.setState({
                nama: '',
                email: '',
                noHP: '',
                message: '',
                errors: [],
            })
        }
    }
    
    showErrors = ({errors}) => {
        return (
            <ul style={{color: 'red', textAlign: 'left'}}>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
            </ul>
        )
    }
    
    render() {
        return (
            <form id="contact" onSubmit={this.handleSubmit}>
                <h1>Contact Me</h1>
                <h3>Nama : <input type="text" placeholder="nama" name="nama" onChange={e => this.setState({nama: e.target.value})} value={this.state.nama}/></h3>
                <h3>Email : <input type="email" placeholder="email" name="email" onChange={e => this.setState({email: e.target.value})} value={this.state.email}/></h3>
                <h3>No HP : <input type="text" placeholder="nomor handphone" name="noHP" onChange={e => this.setState({noHP: e.target.value})} value={this.state.noHP}/></h3>
                <h3>Pesan</h3>
                <textarea style={
                    {resize: 'none', width: '90%', height: '88px'}
                }  onChange={e => this.setState({message: e.target.value})} value={this.state.message}/><br/>
                <this.showErrors errors={this.state.errors}/>
                <input type="submit" value="kirim"/>
            </form>
        )
    }
}