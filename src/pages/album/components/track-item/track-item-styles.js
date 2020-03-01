import styled from 'styled-components';

export const Track = styled.li`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  @media(min-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }

  @media(min-width: 992px) {
    font-size: 18px;
    margin-bottom: 25px;
  }
`;

export const TrackNumber = styled.div`
  width: 30px;
  color: ${(props) => props.theme.primaryColor};
`;

export const TrackName = styled.div`
  flex: 1;
  color: ${(props) => props.theme.secondaryColor};
`;

export const TrackDuration = styled.div`
  width: 55px;
  text-align: right;
  color: ${(props) => props.theme.primaryColor};
`;
