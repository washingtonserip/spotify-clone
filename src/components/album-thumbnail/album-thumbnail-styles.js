import styled from 'styled-components';

export const Wrapper = styled.article`
  width: 140px;
  text-align: center;
  cursor: pointer;
  margin: 0 12.5px 25px;

  &:last-child {
    display: none;
  }

  @media(min-width: 768px) {
    width: 145px;
    margin: 0 20px 35px;
  }

  @media(min-width: 992px) {
    width: calc(25% - 70px);
    margin: 0 35px 50px;
  }

  @media(min-width: 1200px) {
    width: calc(20% - 70px);

    &:last-child {
      display: block;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

export const AlbumName = styled.h2`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  margin: 0 0 5px;
  color: ${(props) => props.theme.secondaryColor};

  @media(min-width: 768px) {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const ArtistName = styled.h3`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  margin: 0;
  color: ${(props) => props.theme.primaryColor};

  @media(min-width: 768px) {
    font-size: 14px;
    line-height: 16px;
  }
`;
