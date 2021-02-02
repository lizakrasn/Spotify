import React from 'react';
import { PopularSongs } from '../popularSongs/popularSongs';
import './overview.scss';
import AlbumModel from '../../../data/albumModel';
import SongModel from '../../../data/songModel'
import { RelatedArtistCard } from '../relatedArtistCard/relatedArtistCard';
import RelatedArtists from '../../../data/relatedArtists';
import { Album } from '../album/album';
import { LatestRelease } from '../lastestRelease/latestRelease';

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
      <div className="overview__info">
        <div className="overview__artist">
          <p className="overview__title">Latest Release</p>
          <div className="overview__latest-release">
            <LatestRelease album={lastAlbum}/>
          </div>

          <p className="overview__title">Popular</p>
          <div className="overview__popular">
            <PopularSongs songs={popularSongs}/>
          </div>
        </div>

        <div className="overview__related">
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

      <div className="overview__albums">
        <p className="overview__title">Albums</p>
        {albums.map(album => {
          return (
            <div className="overview__album">
              <Album album={album} />
            </div>
          )
        })}
      </div>
    </div>
  )
}