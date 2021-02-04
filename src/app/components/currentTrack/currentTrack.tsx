import React from 'react';
import { TrackProgress } from '../ui/trackProgress/trackProgress';

import { Actions } from './components/actions/actions';
import { Options } from './components/options/options';
import './currentTrack.scss';

export const CurrentTrack = () => {
  return (
    <div className="current-track">
      <div className="current-track__block">
        <div className="current-track__actions">
          <Actions />
        </div>

        <div className="current-track__progress">
          <TrackProgress />
        </div>
      </div>

      {/* <div className="current-track__actions">
          <Actions />
        </div>

        <div className="current-track__progress">
          <TrackProgress />
        </div> */}

      <div className="current-track__options">
        <Options />
      </div>
    </div>
  )
}