import styled from 'styled-components';

export const AlbumWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

export const CoverColumn = styled.div`
  margin-right: 35px;

  @media(min-width: 992px) {
    margin-right: 62px;
  }
`;

export const TrackColumn = styled.div`
  flex: 1;
`;
