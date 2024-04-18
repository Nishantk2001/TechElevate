/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import '../VideoPlayer/VideoPlayer.css';
import video from '../../assets/college.mp4';

const VideoPlayer = ({ videoPlay, setVideoPlay }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.traget === player.current) {
      setVideoPlay(false);
    }
  };
  return (
    <div
      className={`video-player ${videoPlay ? '' : 'hide'}`}
      ref={player}
      onClick={closePlayer}>
      <video
        src={video}
        autoPlay
        muted
        controls></video>
    </div>
  );
};

export default VideoPlayer;
