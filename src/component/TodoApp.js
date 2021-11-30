/* eslint-disable no-restricted-globals */
import React from 'react';

const API = 'https://api.genderize.io/?name=';
class TodoApp extends React.Component {
    state = {
        nama: '',
        data: [],
        loading: true,
    }
    
    componentDidMount() {
        let nama = prompt('Masukkan nama anda');
        fetch(API + nama)
            .then((res) => res.json() )
            .then((data) => {
                this.setState({
                    nama: nama,
                    data: data,
                    loading: false,
                })
            })
            .catch((err) => console.log(err.message))
    }

    componentDidUpdate() {
        alert('Hasil prediksi sudah keluar')
    }

    render() {
        const showData =
            <table className="table">
                <tr>
                    <td width="200px">Nama</td>
                    <td width="24px">:</td>
                    <td width="120px">{this.state.nama.toUpperCase()}</td>
                </tr>
                <tr>
                    <td width="200px">Gender</td>
                    <td width="24px">:</td>
                    <td width="120px">{this.state.data.gender}</td>
                </tr>
                <tr>
                    <td width="200px">Probabilitas</td>
                    <td width="24px">:</td>
                    <td width="120px">{this.state.data.probability * 100}%</td>
                </tr>
            </table>;

            const progressBar = <div class="progress"><div class="indeterminate"></div></div>;

        return(
            <main>
                {
                    this.state.loading ?
                    progressBar :
                    showData
                }
                <footer>©2021 Awaludin - Allright Reserved</footer>
            </main>
        )
    }
}

export default TodoApp;