import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.secondaryColor};

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const Header = styled.div`
  padding: 32px;
  text-align: center;

  @media(min-width: 768px) {
    padding-bottom: 48px;
  }

  @media (min-width: 992px) {
    width: 150px;
    text-align: left;
  }
`;

export const Logo = styled.img`
  width: 52px;
  height: 52px;
`;

export const Content = styled.div`
  flex: 1;
`;
