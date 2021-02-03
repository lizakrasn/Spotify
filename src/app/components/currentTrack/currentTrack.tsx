import React from 'react';
import { Actions } from './components/actions/actions';
import { Options } from './components/options/options';
import './currentTrack.scss';

export const CurrentTrack = () => {
  return (
    <div className="current-track">
      <div className="current-track__actions">
        <Actions />
      </div>

      <div className="current-track__options">
        <Options />
      </div>
    </div>
  )
}