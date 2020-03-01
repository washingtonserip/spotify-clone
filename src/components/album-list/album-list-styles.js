import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -12.5px 20px;

  @media(min-width: 768px) {
    margin-left: -15px;
    margin-right: -15px;
  }

  @media(min-width: 992px) {
    margin-left: -35px;
    margin-right: -35px;
    flex-wrap: nowrap;
  }
`;
