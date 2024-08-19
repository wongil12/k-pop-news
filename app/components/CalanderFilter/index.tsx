import CalanderIcon from '@@components/CalanderIcon';
import { Flex } from '@@components/FlexView';
import { BodySmallerText } from '@@components/Text';
import styled from 'styled-components';
import { CalanderFilterProps } from '@@components/CalanderFilter/types';
import { ASSETS } from '@@constants/assets';

const StyledCalanderFilter = styled(Flex.Vertical)`
  width: 46px;
`;

const StyledDescriptionText = styled(BodySmallerText)<{ disabled: boolean }>`
  font-family: ${({ disabled }) => (disabled ? 'PickAllPretendardRegular' : 'PickAllPretendardBold')};
  text-align: center;
`;

function CalanderFilter({ borderColor, emoji, description, image, disabled = false }: CalanderFilterProps) {
  return (
    <StyledCalanderFilter gap={6} alignItems='center'>
      <CalanderIcon borderColor={borderColor} emoji={emoji} disabled={disabled} image={image} />
      {description && (
        <StyledDescriptionText disabled={disabled} color={disabled ? ASSETS.COLORS.Neutural600 : ASSETS.COLORS.Neutural800} numberOfLines={2}>
          {description}
        </StyledDescriptionText>
      )}
    </StyledCalanderFilter>
  );
}

export default CalanderFilter;
