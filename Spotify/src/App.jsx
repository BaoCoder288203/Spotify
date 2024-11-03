import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Container from './components/Container';
import MusicPlaying from './components/MusicPlaying.'

export const MusicContext = createContext();

function App() {
  const [music,setMusic] = useState({});

  const onPlayMusic = (song)=>{
    setMusic(song);
  }
  return (
    <MusicContext.Provider value={{music, onPlayMusic}} >
      <Header></Header> 
      <Container></Container>
      <MusicPlaying></MusicPlaying>
    </MusicContext.Provider>
  )
}

export default App;
