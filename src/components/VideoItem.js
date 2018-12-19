import React from 'react';
import '../css/VideoItem.css';

const VideoItem = ( {video} ) => {
    console.log(video);
    return (
        <div className="item">
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