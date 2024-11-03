import React, { useEffect } from 'react'
import { useContext } from 'react'
import { MusicContext } from '../App'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../music.css';
import data from '../assets/data.json';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';

export default function MusicPlaying() {
  const {music, onPlayMusic} = useContext(MusicContext);
  const [songs,setSongs] = useState( data );
  const [volume,setVolume] = useState(0.5);
  const [isShuffle, setIsShuffle] = useState(false); 

  const hanldeNextSong=(song)=>{
    const songIndex = songs.findIndex((item)=>item.id === song.id);
    const nextSong = isShuffle
      ? songs[Math.floor(Math.random() * songs.length)]
      : songs[songIndex === songs.length - 1 ? 0 : songIndex + 1];
    onPlayMusic(nextSong);
  }
  const handlePreviousSong=(song)=>{
    const songIndex = songs.findIndex((item)=>item.id === song.id);
    const previousSong = songIndex === 0 ? songs[songs.length - 1] : songs[songIndex-1];
    onPlayMusic(previousSong);
  }
  const handleAutoNextSong=(status)=>{
    if(status.type === 'ended'){
      hanldeNextSong(music);
    }
  }

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle); 
  };

  return (
    <div style={{
      position: 'relative',
    }}>
      <button onClick={toggleShuffle} className={`shuffle-button ${isShuffle ? '' : 'active'}`}>
        <FontAwesomeIcon icon={faShuffle} />
      </button>
      <AudioPlayer
        className="audio-player"
        autoPlay
        src={music?.url}
        onClickNext={()=>hanldeNextSong(music)}
        onClickPrevious={() => handlePreviousSong(music ? music : songs[0])}
        onEnded={(e)=>handleAutoNextSong(e)}
        showJumpControls={true}
        showFilledVolume={true}
        showSkipControls={true}
        showLoopControl 
        onVolumeChange={(e) => {
          setVolume(e.target.volume)
          console.log('Volume:', e.target.volume);
        }}
        volume={volume}
      />
    </div>
  )
}
