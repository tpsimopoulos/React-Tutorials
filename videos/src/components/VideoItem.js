import React from 'react';
import './css/VideoItem.css'


const VideoItem = (props) => {
    const { snippet, description } = props.video;


    return (
        <div onClick={() => props.onVideoSelect(props.video)} className="video-item item">
            <img className="ui image" alt={description} src={snippet.thumbnails.default.url} />
            <div className="content">
                <div className="header">{snippet.title}</div>
            </div>
        </div>
    )
}


export default VideoItem;