import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/layout';
import Search from '../../components/search';
import Headings from '../../components/headings';
import SearchResults from './components/search-results';

function SearchView({
  query,
  results,
}) {
  const title = results.lenght ? 'Resultados encontrados' : 'Nenhum resultado encontrado';
  return (
    <Layout>
      <Search
        query={query}
      />

      {query && (
        <>
          <Headings>
            {`${title} para "${decodeURIComponent(query)}"`}
          </Headings>

          <SearchResults
            results={results}
          />
        </>
      )}
    </Layout>
  );
}

SearchView.propTypes = {
  query: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

SearchView.getDefaultProps = {
  query: '',
};

export default SearchView;
