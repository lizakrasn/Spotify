import React from 'react';
import './actions.scss';

import { IoIosSkipBackward } from 'react-icons/io';
import { IoIosSkipForward } from 'react-icons/io';
import { BiPlay } from 'react-icons/bi';


export const Actions = () => {
  return (
    <div className="actions">
      <button className="actions__skip-backward">
        <IoIosSkipBackward size={25} />
      </button>

      <button className="actions__play">
        <BiPlay size={50} />
      </button>

      <button className="actions__skip-forward">
        <IoIosSkipForward size={25} />
      </button>
    </div>
  )
}