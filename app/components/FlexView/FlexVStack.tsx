import { FlexViewProps } from '@@components/FlexView/types';
import { StyledFlexView } from '@@components/FlexView/StyledFlexView';

export function FlexVStack({ ...props }: FlexViewProps) {
  return <StyledFlexView flexDirection='column' {...props} />;
}
