import React from 'react';
import { PopularSongs } from '../popularSongs/popularSongs';
import './overview.scss';
import AlbumModel from '../../../data/albumModel';
import SongModel from '../../../data/songModel'
import { RelatedArtistCard } from '../relatedArtistCard/relatedArtistCard';
import RelatedArtists from '../../../data/relatedArtists';

interface OverviewProps {
  albums: AlbumModel[],
  lastAlbum: AlbumModel,
  popularSongs: SongModel[],
  relatedArtists: RelatedArtists[]
}

export const Overview = ({
  albums,
  lastAlbum,
  popularSongs,
  relatedArtists}: OverviewProps) => {
  return (
    <div className="overview">
      <div style={{width: "100%"}}>
        <p className="overview__title">Popular</p>
        <PopularSongs songs={popularSongs}/>
      </div>

      <div>
        <p className="overview__title">Related Artists</p>
        <div className="overview__related-artists">
          {relatedArtists.map(atrist => {
            return (
              <RelatedArtistCard artist={atrist}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}