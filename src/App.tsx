import React, { useState} from 'react';
import './App.scss';
import { Header } from './header/header';
import { Main } from './main/main';

import artist from './data/artist.json'

function App() {
  const [currentArtist, setCurrentArtist] = useState(artist);

  return (
    <div className="App">
      <Header />
      <Main artist={artist} />
      <div style={{height: "100px"}}>
        <p>Footer Hello!</p>
      </div>
    </div>
  );
}

export default App;
