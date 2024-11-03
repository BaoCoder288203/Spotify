import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <div className='header' >
        <div className='header-title'>
            <FontAwesomeIcon className='spotify-icon' icon={faSpotify} />
            <h1>Spotify</h1>
        </div>
    </div>
  );
}
