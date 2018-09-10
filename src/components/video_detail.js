import React from 'react';

const VideoDetail = ({video}) => {
    
    const videoId = video.id.videoId;
    // const url = `https://www.youtube.com/embed${videoId}`;
    
    //console.log(videoId);
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16v9">
                {/* <iframe src={url} frameborder="0" className="embed-responsive-item"></iframe> */}
            </div>
            <div className="detail">
                {/* <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div> */}
            </div>
        </div>
    );
}

export default VideoDetail;