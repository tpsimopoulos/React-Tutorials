import React from 'react';


const VideoDetail = (props) => {
    if (!props.video) {
        return <div>Loading...</div>
    } else {

        const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`

        return <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">
                    <p>{props.video.snippet.title}</p>
                </h4>
            </div>
        </div >
    }
}


export default VideoDetail;