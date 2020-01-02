import React from 'react';
import './App.css';
import { Player } from 'video-react';
import HlsDecoder from './shared/HlsDecoder'

function App() {
  return (
    <Player>
      {/* <HlsDecoder
        isVideoChild
        src="http://stream.readler.local/hls/file-%2FOP915.mp4.m3u8"
      /> */}
    </Player>
  );
}

export default App;
