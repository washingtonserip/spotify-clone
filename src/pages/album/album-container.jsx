import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAlbums } from '../../redux/albums/actions';
import { getAlbumById } from '../../redux/albums/selectors';
import AlbumView from './album-view';

function AlbumContainer() {
  const { id } = useParams();
  const album = useSelector(getAlbumById(id));
  const dispatch = useDispatch();

  function fetchAlbum() {
    if (!album) {
      dispatch(fetchAlbums(id));
    }
  }

  useEffect(() => fetchAlbum(), []);

  return album ? (
    <AlbumView
      cover={album.images[0].url}
      name={album.name}
      artists={album.artists.map((artist) => artist.name)}
      tracks={album.tracks.items}
    />
  ) : (<></>);
}

export default AlbumContainer;
