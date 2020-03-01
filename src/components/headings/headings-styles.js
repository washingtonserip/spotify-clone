import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Title = styled.h1`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: ${(props) => props.theme.secondaryColor};
  margin: 0;
  padding: 0;

  @media(min-width: 768px) {
  font-size: 20px;
  line-height: 23px;
  }

  @media(min-width: 992px) {
    font-size: 24px;
    line-height: 28px;
  }
`;
