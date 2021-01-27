import React from 'react';
import './main.scss'
import ArtistModel from '../data/artist';

import { Artist } from './components/artist/artist';
import { Menu } from './components/menu/menu';

interface MainProps {
  artist: ArtistModel,
}

export const Main = ({artist}: MainProps) => {

  return (
    <div className="content">
      <div className="content__menu">
        <Menu />
      </div>

      <div className="content__artist">
        <Artist artist={artist}/>
      </div>
    </div>
  )
}