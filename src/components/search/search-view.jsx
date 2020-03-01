import React from 'react';
import { Wrapper, Label, Input } from './search-styles';

function SearchView() {
  return (
    <Wrapper>
      <Label for="search-field">Busque por artistas, álbuns ou músicas</Label>

      <Input
        id="search-field"
        placeholder="Comece a escrever..."
      />
    </Wrapper>
  );
}

export default SearchView;
