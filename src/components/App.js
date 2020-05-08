import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = "AIzaSyC5vRXolPcccaMx6qX2BUOMAhyES0XMBHU";
let allvideo=[];
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
        allvideo=response.data.items;
        this.setState({videos: response.data.items.slice(1), selectedVideo:response.data.items[0]});
    }

    onVideoSelect = (video) => {
        const videolist=[];
        for(let i=0;i<allvideo.length;i++)
        {
            if(allvideo[i]!=video)
                videolist.push(allvideo[i]);
        }
        this.setState({selectedVideo : video, videos:videolist});
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