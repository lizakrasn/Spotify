import React, { useState} from 'react';
import './app.scss';
import { Header } from './components/header/header';
import { Main } from '../main/main';

import artist from '../data/artistData'
import { CurrentTrack } from '../currentTrack/currentTrack';

function App() {
  const [currentArtist, setCurrentArtist] = useState(artist);

  return (
    <div className="App">
      <Header />
      <Main />
      <CurrentTrack />
    </div>
  );
}

export default App;
