import styled from 'styled-components';
import backIcon from '../../images/back-icon.svg';

export const Button = styled.button`
  font-size: 14px;
  background-color: transparent;
  color: ${(props) => props.theme.secondaryColor};
  line-height: 16px;
  border: 0;
  padding: 0;
  cursor: pointer;
  margin-bottom: 30px;

  @media(min-width: 992px) {
    margin-top: 60px;
    font-size: 18px;
    margin-bottom: 42px;
  }
`;

export const Icon = styled.i`
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 5px;
  background: url(${backIcon}) no-repeat center left;

  @media(min-width: 992px) {
    width: 14px;
    height: 14px;
  }
`;
