import React from 'react';
import '../css/VideoItem.css';

const VideoItem = ( {video, onVideoSelect} ) => {
    return (
        <div className="item" onClick={() => onVideoSelect(video)}>
            <img 
                className="ui image"
                src={video.snippet.thumbnails.medium.url}
            />
            <div className="content">
                {video.snippet.title}
            </div>
        </div>
    );
};

export default VideoItem;