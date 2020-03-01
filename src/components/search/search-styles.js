import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid ${(props) => props.theme.secondaryColor};
  padding: 0 8px;
  margin-bottom: 32px;

  @media(min-width: 768px) {
    margin-bottom: 62px;
  }

  @media (min-width: 992px) {
    margin-top: 70px;
    margin-bottom: 82px;
  }
`;

export const Label = styled.label`
  font-size: 12px;
  margin-bottom: 10px;

  @media(min-width: 768px) {
    font-size: 14px;
  }

  @media(min-width: 992px) {
    font-size: 16px;
  }
`;

export const Input = styled.input`
  height: 28px;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  color: ${(props) => props.theme.secondaryColor};
  background-color: transparent;
  border: 0;
  margin-bottom: 14px;

  @media(min-width: 768px) {
    height: 33px;
    font-size: 28px;
    line-height: 33px;
  }

  @media(min-width: 992px) {
    height: 56px;
    font-size: 48px;
    line-height: 56px;
  }
`;
