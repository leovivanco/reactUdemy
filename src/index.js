import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import ViddeoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBr7W4n3f27uG1vtfNDU6Q_it9lMd2p2Jk';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {videos: []};
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({videos})
        });
    }
    render(){
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]} />
                <ViddeoList videos={this.state.videos} />
            </div>
        );
    }
}


ReactDom.render(<App />, document.querySelector('.container'));



/*Estrutura do React
Criar pasta componentes
Criar cada componentes
    Home, menu, preços, carros...
Importar API na index


Css

Criar padrão



*/