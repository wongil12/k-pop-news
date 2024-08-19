import Svg, { Path } from 'react-native-svg';
import { CalanderIconProps } from '@@components/CalanderIcon/types';
import styled from 'styled-components';
import { Text } from '@@components/Text/Text';
import { Flex } from '@@components/FlexView';
import { ASSETS } from '@@constants/assets';

const StyledCalanderIcon = styled(Flex.Horizontal)`
  position: relative;
  width: 42px;
  height: 42px;
`;

const StyledSvg = styled(Svg)`
  position: absolute;
  top: 0px;
  left: 0px;
`;

const StyledEmojiText = styled(Text)`
  font-family: 'PickAllPretendardBold';
  font-size: 20px;
  letter-spacing: -0.2px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

function CalanderIcon({ borderColor, emoji, image, disabled }: CalanderIconProps) {
  const color = disabled ? ASSETS.COLORS.Neutural300 : borderColor;

  return (
    <StyledCalanderIcon alignItems='center' justifyContent='center'>
      <StyledSvg width='42' height='42' viewBox='0 0 42 42' fill='none'>
        <Path
          d='M17.918 2.37285C19.6364 0.710475 22.3636 0.710475 24.082 2.37285C25.508 3.75239 27.4908 4.39666 29.4554 4.11879C31.8227 3.78394 34.029 5.38692 34.4421 7.74185C34.7849 9.69612 36.0104 11.3828 37.7631 12.3128C39.8751 13.4334 40.7178 16.027 39.6679 18.175C38.7965 19.9576 38.7965 22.0424 39.6679 23.825C40.7178 25.973 39.8751 28.5666 37.7631 29.6872C36.0104 30.6172 34.7849 32.3039 34.4421 34.2581C34.029 36.6131 31.8227 38.2161 29.4554 37.8812C27.4908 37.6033 25.508 38.2476 24.082 39.6272C22.3636 41.2895 19.6364 41.2895 17.918 39.6272C16.492 38.2476 14.5092 37.6033 12.5446 37.8812C10.1773 38.2161 7.97096 36.6131 7.55788 34.2581C7.21507 32.3039 5.9896 30.6172 4.23691 29.6872C2.12488 28.5666 1.28215 25.973 2.33215 23.825C3.2035 22.0424 3.2035 19.9576 2.33215 18.175C1.28215 16.027 2.12488 13.4334 4.23691 12.3128C5.9896 11.3828 7.21507 9.69612 7.55788 7.74185C7.97096 5.38692 10.1773 3.78394 12.5446 4.11879C14.5092 4.39666 16.492 3.75239 17.918 2.37285Z'
          fill={color}
          fillOpacity={image || disabled ? 1 : 0.2}
          stroke={color}
          strokeWidth='2'
        />
      </StyledSvg>
      {image && image}
      {emoji && <StyledEmojiText disabled={disabled}>{emoji}</StyledEmojiText>}
    </StyledCalanderIcon>
  );
}

export default CalanderIcon;
