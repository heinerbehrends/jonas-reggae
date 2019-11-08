import React from 'react';
import ReactPlayer from 'react-player';

function MediaPlayer({src}) {
  return (
    <ReactPlayer url={src} style={{margin: 'auto'}} controls />
  );
}

export default MediaPlayer;