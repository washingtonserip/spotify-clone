import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/layout';
import Search from '../../components/search';
import Headings from '../../components/headings';
import AlbumList from '../../components/album-list';

function HomeView({ albums }) {
  return (
    <Layout>
      <Search query="" />

      {albums.length ? (
        <>
          <Headings>
            Álbuns buscados recentemente
          </Headings>

          <AlbumList
            albums={albums}
          />
        </>
      ) : (<></>)}
    </Layout>
  );
}

HomeView.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HomeView;
