import React, {useState} from 'react';
import ArtistModel from '../../../../../data/artist';
import './artist.scss';
import { Button } from '../../../ui/button/button';
import { RelatedArtists } from './components/relatedArtists/relatedArtists';
import { Overview } from './components/overview/overview';
import artistsData from '../../../../../data/relatedArtists.json';

import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsFillPlayFill } from 'react-icons/bs';
import { Tabs } from '../../../ui/tabs/Tabs';
import TabsModel from '../../../../../data/tabs';
import artistData from '../../../../../data/artistData';

const tabs = [
  {
    "value": "overview",
    "label": "OVERVIEW"
  },
  {
    "value": "related",
    "label": "RELATED ARTISTS"
  }
]

export const Artist = () => {
  const [relatedArtists, setRelatedArtists] = useState(artistsData);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [artist, setArtist] = useState(artistData);

  return (
    <div className="artist">
      <div className="artist__header">
        <div
          className="artist__header-image"
          style={{backgroundImage: `url(${artist.backgroundImgUrl})`}}
        ></div>
        <div className='artist__info-block'>
          <div className="artist__image-container">
            <img
                className="artist__image"
                alt="artist"
                src={artist.imgUrl}
            />
          </div>

          <div className="artist__info">
            <div className="artist__details">
              <p className="artist__title">Artist</p>
              <p className="artist__name">{artist.name}</p>
            </div>
            <div className="artist__actions">
              <Button type="primary" className="artist__button">
                <p className="button__text"> <BsFillPlayFill size={20}/> Play</p>
              </Button>
              <Button text='Follow' type="basic" className="artist__button"/>
              <Button type="circle" className="artist__button">
                <p><BiDotsHorizontalRounded size={15}/></p>
              </Button>
            </div>
          </div>
          <div className="artist__listeners">
            <p className="artist__count">{new Intl.NumberFormat().format(artist.listeners)}</p>
            <p className="artist__label">Monthly Listeners</p>
          </div>
        </div>

        <div className="artist__tabs">
          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>
      </div>

      {activeTab.value === 'related'
        ? (
          <div className="artist__related-artists">
            <RelatedArtists artistsData={relatedArtists}/>
          </div>
        )
        : (
          <div>
            <Overview
              albums={artist.albums}
              lastAlbum={artist.lastAlbum}
              popularSongs={artist.popularSongs}
              relatedArtists={relatedArtists}
            />
          </div>
        )
      }
    </div>
  )
}