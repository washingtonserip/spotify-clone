import React from 'react';
import Layout from '../../components/layout';
import Search from '../../components/search';
import Headings from '../../components/headings';
import AlbumList from '../../components/album-list';

function HomeView() {
  return (
    <Layout>
      <Search />

      <Headings>
        Álbuns buscados recentemente
      </Headings>

      <AlbumList />

      <Headings>
        Álbuns buscados recentemente
      </Headings>

      <AlbumList />
    </Layout>
  );
}

export default HomeView;
