import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import './volume.scss';

const STEP = 0.1;
const MIN = 0;
const MAX = 100;

export const Volume = () => {
  const [value, setValue] = useState([50])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}
    >
      <Range
        values={value}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={values => setValue(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              display: 'flex',
              width: '70px'
            }}
          >
            <div
              className="volume__base"
              ref={props.ref}
              style={{
                background: getTrackBackground({
                  values: value,
                  colors: ['rgb(170, 170, 170)', 'rgb(66, 66, 66)'],
                  min: MIN,
                  max: MAX
                }),
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            className="volume__thumb"
            {...props}
            style={{
              ...props.style,
              cursor: 'pointer'
            }}
          >
          </div>
        )}
      />
    </div>
  );
}
