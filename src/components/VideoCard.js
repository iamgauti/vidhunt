import React from 'react';
import './VideoCard.css'
class VideoCard extends React.Component{
    /*componentDidMount(){
        this.VideoRef.current.addEventListener('load',this.setSpans);
    }
    setSpans = () => {
        const height= this.VideoRef.current.clientHeight;
        const spans= Math.ceil(height/10);

        this.setState({spans});
    }*/
    render(){
        const video=this.props.video;
        const title=video.snippet.title;
        const url=video.snippet.thumbnails.medium.url;
        const onVideoSelect=this.props.onVideoSelect;
        return(
            <div onClick={()=>{onVideoSelect(video)}}className="video-card item">
                <img alt={title} className="ui image" src={url}/>
                <div className="content">
                <div className="header">{title}</div>
                </div>
            </div>
        );
    }
}

export default VideoCard;