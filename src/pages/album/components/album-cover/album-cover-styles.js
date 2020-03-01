import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 35px;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  margin-bottom: 15px;
`;

export const AlbumName = styled.h2`
  width: 250px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  margin: 0 0 10px;
  text-align: center;
  color: ${(props) => props.theme.secondaryColor};
`;

export const ArtistName = styled.h3`
  width: 250px;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  text-align: center;
  color: ${(props) => props.theme.primaryColor};
`;
