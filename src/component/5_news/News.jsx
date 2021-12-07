/* eslint-disable no-restricted-globals */
import React from 'react';
import TodoFooter from '../4_gender/Footer';

const URL = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=ffe24f56f15f4dea9595ee8ae8e1ccff';
const searchURL = 'https://newsapi.org/v2/everything?q=';
const API_KEY = '&apiKey=ffe24f56f15f4dea9595ee8ae8e1ccff';

class News extends React.Component {
    state = {
        keyword: '',
        dataNews: [],
        loading: true,
    }
    
    componentDidMount() {
        fetch(URL)
            .then((res) => res.json() )
            .then((data) => {
                console.log(data.articles)
                this.setState({
                    dataNews: data.articles,
                    loading: !this.state.loading,
                })
            })
            .catch((err) => console.log(err.message))
    }

    changeNews = () => {
        fetch(searchURL + this.state.keyword + API_KEY)
            .then(this.setState({loading: !this.state.loading}))
            .then((res) => res.json() )
            .then((data) => {
                console.log(data.articles)
                this.setState({
                    dataNews: data.articles,
                    loading: !this.state.loading,
                })
            })
            .catch((err) => console.log(err.message))
    }

    render() {
        const showData = this.state.dataNews.map((data) => {
            return(
                <article>
                    <img src={data.urlToImage} alt="Gambar tidak ditemukan"/>
                    <h3>{data.title}</h3>
                    <p class="author">{data.author} - {data.publishedAt}</p>
                    <p class="description">{data.description} <a href={data.url} target="_blank" rel="noreferrer"><button>Read More..</button></a></p>
                </article> )
        })

            const progressBar = <div class="progress"><div class="indeterminate"></div></div>;

        return(
            <>
                <main>
                    <input type="text" placeholder="SEARCH NEWS" width="100%" value={this.state.keyword} onChange={(e) => this.setState({keyword: e.target.value})}/>
                    <div style={{textAlign: 'center', marginBottom: '12px', marginTop: '-12px'}}><button onClick={this.changeNews} style={{padding: '6px 12px', backgroundColor: 'blue', color: 'white', borderRadius: '6px'}}>SEND</button></div>
                    <div id="news">
                    {
                        this.state.loading ?
                        progressBar :
                        showData
                    }
                    </div>
                </main>
                <TodoFooter />
            </>
        )
    }
}

export default News;