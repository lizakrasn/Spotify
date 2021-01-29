import React from 'react';
import './popularSongs.scss';
import SongModel from '../../../data/songModel';
import { Track } from '../track/track';

interface PopularSongsProps {
  songs: SongModel[]
}

export const PopularSongs = ({songs}: PopularSongsProps) => {
  return(
    <div className="tracks">
      {songs.map((song, index) => {
        return (
          <div className="tracks__track">
            <Track song={song} index={index} />
          </div>
        )
      })}
    </div>
  )
}