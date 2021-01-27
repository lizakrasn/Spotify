import React, {useState} from 'react';
import './relatedArtists.scss';

import { ArtistCard } from '../artistCard/artistCard';
import ArtistsModel from '../../../data/relatedArtists';

interface RelatedArtistsProps {
  artistsData: ArtistsModel[]
}

export const RelatedArtists = ({artistsData}: RelatedArtistsProps) => {
  return (
    <div className="related-artists">
      {artistsData.map(card => {
        return (
          <div className="related-artists__item">
            <ArtistCard artist={card.artist} imgUrl={card.imgUrl}/>
          </div>
        )
      })}
    </div>
  )
}