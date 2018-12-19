import React from 'react';

const VideoDetail = ({selectedVideo}) => {
    if(!selectedVideo) {
        return <div>Loading</div>;
    }

    const videoSrc = `http://www.youtube.com/embed/${selectedVideo.id.videoId}`

    return (
        <div className="ui segment">
            <iframe src={videoSrc}/>
            <h4 className="ui header">
                {selectedVideo.snippet.title}
            </h4>
            <p>
                {selectedVideo.snippet.description}
            </p>
        </div>
    );
}


export default VideoDetail;