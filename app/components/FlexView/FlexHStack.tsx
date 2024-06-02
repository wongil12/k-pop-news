import { StyledFlexView } from '@@components/FlexView/StyledFlexView';
import { FlexViewProps } from '@@components/FlexView/types';

export function FlexHStack({ ...props }: FlexViewProps) {
  return <StyledFlexView flexDirection='row' {...props} />;
}
