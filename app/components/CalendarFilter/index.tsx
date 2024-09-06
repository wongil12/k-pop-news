import CalendarIcon from '@@components/CalendarIcon';
import { Flex } from '@@components/FlexView';
import { BodySmallerText } from '@@components/Text';
import styled from 'styled-components';
import { CalendarFilterProps } from '@@components/CalendarFilter/types';
import { ASSETS } from '@@constants/assets';

const StyledCalendarFilter = styled(Flex.Vertical)`
  width: 46px;
`;

const StyledDescriptionText = styled(BodySmallerText)<{ disabled: boolean }>`
  font-family: ${({ disabled }) => (disabled ? 'PickAllPretendardRegular' : 'PickAllPretendardBold')};
  text-align: center;
`;

function CalendarFilter({ borderColor, emoji, description, image, disabled = false }: CalendarFilterProps) {
  return (
    <StyledCalendarFilter gap={6} alignItems='center'>
      <CalendarIcon borderColor={borderColor} emoji={emoji} disabled={disabled} image={image} />
      {description && (
        <StyledDescriptionText disabled={disabled} color={disabled ? ASSETS.COLORS.Neutural600 : ASSETS.COLORS.Neutural800} numberOfLines={2}>
          {description}
        </StyledDescriptionText>
      )}
    </StyledCalendarFilter>
  );
}

export default CalendarFilter;
