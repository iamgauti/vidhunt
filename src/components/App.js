import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = "AIzaSyC5vRXolPcccaMx6qX2BUOMAhyES0XMBHU";

class App extends React.Component{
    state={ videos:[], selectedVideo:null };

    onSearchSubmit = async term => {
        const response = await youtube.get("/search", {
          params: {
            q: term,
            part: "snippet",
            type: 'video',
            maxResults: 5,
            key: KEY
          }
        });
        this.setState({videos: response.data.items, selectedVideo:response.data.items[0]});
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo : video});
    }

    render(){
        return (
            <div className='ui container' style={{ marginTop:'10px'}}> 
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                    <div className="eleven wide column"><VideoDetail video={this.state.selectedVideo}/></div> 
                    <div className="five wide column"><VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/></div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default App;