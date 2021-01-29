export default interface SongModel {
  name: string,
  imgUrl: string,
  listens: number,
  durationSeconds : number,
  id: number,
  albumId: number,
  coartists : string[]
}