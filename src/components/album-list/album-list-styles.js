import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -12.5px;
  margin-right: -12.5px;
  margin-bottom: 20px;
  overflow: hidden;
  height: 423px;

  @media(min-width: 768px) {
  margin-left: -15px;
  margin-right: -15px;
  height: 240px;
  }

  @media(min-width: 992px) {
    margin-left: -35px;
    margin-right: -35px;
    height: 270px;
    flex-wrap: nowrap;
  }
`;
