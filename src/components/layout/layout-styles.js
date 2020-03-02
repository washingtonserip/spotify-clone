import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.secondaryColor};

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Header = styled.div`
  padding: 32px;
  text-align: center;

  @media(min-width: 768px) {
    padding-bottom: 48px;
  }

  @media (min-width: 992px) {
    width: 86px;
    text-align: left;
  }
`;

export const Logo = styled.img`
  width: 52px;
  height: 52px;
`;

export const Content = styled.div`
  width: 300px;
  overflow: hidden;

  @media(min-width: 768px) {
  width: 710px;
  }

  @media (min-width: 992px) {
    width: calc(100vw - 300px);
  }
`;
