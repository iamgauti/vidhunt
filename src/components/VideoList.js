import React from 'react';
import VideoCard from './VideoCard';

const VideoList = (props) => {
    const newVideoList = props.videos.map((video)=> <VideoCard key={video.id} onVideoSelect={props.onVideoSelect} video={video}/> );
    return (
        <div className="ui relaxed divided list">
            {newVideoList}
        </div>
    );
};

export default VideoList; 