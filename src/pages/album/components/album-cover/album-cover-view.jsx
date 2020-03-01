import React from 'react';
import {
  Wrapper,
  Image,
  AlbumName,
  ArtistName,
} from './album-cover-styles';
import AlbumCover from '../../../../images/album-cover.jpg';

function AlbumCoverView() {
  return (
    <Wrapper>
      <Image
        src={AlbumCover}
        alt="Nome do álbum"
      />

      <AlbumName>
        Nome do álbum
      </AlbumName>

      <ArtistName>
        Nome do artista
      </ArtistName>
    </Wrapper>
  );
}

export default AlbumCoverView;
