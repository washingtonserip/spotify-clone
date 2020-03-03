import React from 'react';
import { useSelector } from 'react-redux';
import { getAllAlbums } from '../../redux/albums/selectors';
import HomeView from './home-view';

function SearchContainer() {
  const allAlbums = useSelector(getAllAlbums);
  const visitedAlbums = Object.values(allAlbums)
    .sort((a, b) => new Date(b.request_date) - new Date(a.request_date));

  return (
    <HomeView
      albums={visitedAlbums.splice(0, 5)}
    />
  );
}

export default SearchContainer;
