import React from 'react';
import './Style.css';

export default class Main extends React.Component {
    render() {
        return(
            <main>
                <div className="top-biodata">
                    <h3>College Student</h3>
                    <h2>Awaludin Nasir Ubadah</h2>
                    <div><button>Github Profile</button></div>
                </div>
                <div className="biodata" id="biodata">
                    <h1>Biodata</h1>
                    <p>Namaku adalah Awaludin Nasir Ubadah dan aku adalah anak ke 2 dari 4 bersaudara. Saat ini aku sedang berkuliah di Universitas Udayana jurusan Informatika. Aku bertemu banyak teman disini dan kagum akan budaya Bali yang sangat indah. Selain itu, perubahan kebiasaan dari SMA ke kuliah membuatku harus beradaptasi.</p>
                    <p>Aku bukanlah anak yang jenius, hanyalah anak biasa. Kebetulan saja aku suka coding jadi aku ingin memperdalam, meskipun koding membuat kepalaku pusing. Error dan bug selalu menghantui setiap programku, tapi hasil akhir yang memuaskan sudah menjadi obat untuk semuanya. Karena aku percaya bahwa "Usaha tidak akan mengkhianati hasil".</p>
                </div>
                <div className="skill" id="skill">
                    <div className="basic-skill">
                        <h1>Basic Skill</h1>
                        <ol>
                            <li>C</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ol>
                    </div>
                    <div className="framework">
                        <h1>Framework</h1>
                        <ul>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                </div>
                <form id="contact">
                    <h1>Contact Me</h1>
                    <h3>Nama : <input type="text" placeholder="nama"/></h3>
                    <h3>Email : <input type="email" placeholder="email"/></h3>
                    <h3>Pesan</h3>
                    <textarea style={
                        {resize: 'none', width: '90%', height: '88px'}
                    }/><br/>
                    <input type="submit" value="kirim"/>
                </form>
            </main>
        )
    }
}