import React from 'react';
import Layout from '../../components/layout';
import Search from '../../components/search';
import Headings from '../../components/headings';
import SearchResults from '../../components/search-results';

function SearchView() {
  return (
    <Layout>
      <Search />

      <Headings>
        Resultados encontrados para &quot;Bob&quot;
      </Headings>

      <SearchResults />
    </Layout>
  );
}

export default SearchView;
