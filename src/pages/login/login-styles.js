import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.secondaryColor};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;

  @media(min-width: 768px) {
    width: 64px;
    height: 64px;
  }
`;

export const Text = styled.h1`
  font-weight: 700;
  font-size: 20px;
  color: ${(props) => props.theme.primaryColor};
  margin: 55px 0;

  @media(min-width: 768px) {
    font-size: 32px;
    margin: 65px 0;
  }
`;

export const Button = styled.button`
  display: block;
  width: 220px;
  height: 40px;
  font-weight: 700;
  font-size: 12px;
  color: ${(props) => props.theme.secondaryColor};
  line-height: 40px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.greenColor};
  border-radius: 50px;
  cursor: pointer;
  border: 0;

  @media(min-width: 768px) {
    width: 260px;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
  }
`;
