import React from 'react';
import './options.scss';

import { GiHamburgerMenu } from 'react-icons/gi';
import { TiArrowShuffle } from 'react-icons/ti';
import { HiRefresh } from 'react-icons/hi';
import { MdPhoneIphone } from 'react-icons/md';
import { Volume } from '../../../ui/volume/volume';

export const Options = () => {
  return (
    <div className="options">
      <a href="#" className="options__lyrics">Lyrics</a>
      <a href="#" className="options__control">
        <GiHamburgerMenu size={12} />
      </a>

      <a href="#" className="options__control">
        <TiArrowShuffle size={12} />
      </a>

      <a href="#" className="options__control">
        <HiRefresh size={12} />
      </a>

      <a href="#" className="options__control">
        <MdPhoneIphone size={10} /> Devices available
      </a>

      <Volume />
    </div>
  )
}