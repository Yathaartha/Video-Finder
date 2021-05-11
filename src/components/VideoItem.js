import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => onVideoSelect(video)}
      className="video-item item"
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        style={{ maxWidth: "180px" }}
      ></img>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
