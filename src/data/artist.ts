import AlbumModel from './albumModel';
import Song from './song';
import SongModel from './songModel';

export default interface Artist {
  name: string,
  imgUrl: string,
  backgroundImgUrl: string,
  listeners: number,
  albums: AlbumModel[],
  lastAlbum: AlbumModel,
  popularSongs: SongModel[]
}