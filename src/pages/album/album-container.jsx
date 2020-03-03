import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { saveAlbum } from '../../redux/albums/actions';
import { getCachedAlbumById } from '../../redux/albums/selectors';
import AlbumsProvider from '../../providers/albums';
import AlbumView from './album-view';

function AlbumContainer() {
  const { id } = useParams();
  const chachedAlbum = useSelector(getCachedAlbumById(id));
  const dispatch = useDispatch();

  function searchAlbuns() {
    AlbumsProvider.getAlbumV1(id)
      .then((res) => res.json())
      .then((res) => dispatch(saveAlbum(id, res)));
  }

  function verifyCacheAndFetchAlbum() {
    if (!chachedAlbum) {
      searchAlbuns();
    }
  }

  verifyCacheAndFetchAlbum();

  return (
    <AlbumView
      cover={chachedAlbum ? chachedAlbum.images[0].url : ''}
      name={chachedAlbum ? chachedAlbum.name : ''}
      artists={chachedAlbum ? chachedAlbum.artists.map((artist) => artist.name) : []}
      tracks={chachedAlbum ? chachedAlbum.tracks.items : []}
    />
  );
}

export default AlbumContainer;
