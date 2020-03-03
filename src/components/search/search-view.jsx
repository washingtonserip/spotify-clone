import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Label, Input } from './search-styles';

function SearchView({
  searchText,
  doSearch,
}) {
  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  return (
    <Wrapper>
      <Label htmlFor="search-field">
        Busque por artistas, álbuns ou músicas
      </Label>

      <Input
        ref={inputElement}
        id="search-field"
        placeholder="Comece a escrever..."
        value={searchText}
        onChange={(e) => doSearch(e.target.value)}
      />
    </Wrapper>
  );
}

SearchView.propTypes = {
  searchText: PropTypes.string.isRequired,
  doSearch: PropTypes.func.isRequired,
};

export default SearchView;
