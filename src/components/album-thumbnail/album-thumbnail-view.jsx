import React from 'react';
import {
  Wrapper,
  Image,
  AlbumName,
  ArtistName,
} from './album-thumbnail-styles';
import AlbumCover from '../../images/album-cover.jpg';

function AlbumThumbnail() {
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

export default AlbumThumbnail;
