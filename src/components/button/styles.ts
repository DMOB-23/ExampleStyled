import styled from 'styled-components/native';
import { MyButtonBaseProps, MyButtonContainerProps } from './interface';

const backgroundColors = {
  action: '#42A5F5',
  error: '#EF5350',
  default: '#CDCDCD',
};

const textColors = {
  action: '#E3F2FD',
  error: '#FFEBEE',
  default: '#616161',
};

export const ButtonContainer = styled.Pressable<MyButtonContainerProps>`
  padding: 8px;
  align-items: center;
  background-color: ${props => backgroundColors[props.variant ?? 'default']};
`;

export const ButtonText = styled.Text<MyButtonBaseProps>`
  color: ${props => textColors[props.variant ?? 'default']};
`;
