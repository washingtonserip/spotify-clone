import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
`;
