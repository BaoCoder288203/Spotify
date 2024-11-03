import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import data from '../assets/data.json';
import { useContext } from 'react';
import { MusicContext } from '../App';

export default function Container() {
    const [songs, setSong] = useState(data);
    const { music, onPlayMusic} = useContext(MusicContext);
    const [selectedSongId, setSelectedSongId] = useState(null);

    const handleClickSong= (song)=>{
        onPlayMusic(song);
        setSelectedSongId(song.id);
    }

    return (
        <div className='container'>
            <div className='container-left'>
                <h4>Now playing</h4>
                <h2 className='title'>{music.title}</h2>
                <div className='preview'>
                    <img src={music?.artwork} className='preview-image' alt="Preview" />
                    <div className='author'>
                        <img src={music?.artwork} alt="Author" />
                        <h5>{music?.artist}</h5>
                    </div>
                </div>
            </div>
            <div className="container-right">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th><FontAwesomeIcon icon={faDownload} /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.map((item, index) => (
                            <tr key={index} onClick={() => handleClickSong(item)}
                                className={selectedSongId === item.id ? 'playing' : ''}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.artist}</td>
                                <td>
                                    <a href={item.url}>
                                        <FontAwesomeIcon icon={faDownload} />
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
