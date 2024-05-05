import {
  BodyLargeText,
  BodyMediumText,
  BodySmallText,
  BodySmallarText,
  HeaderLargeText,
  HeaderMediumText,
  HeaderSmallText,
  TitleLargeText,
  TitleMediumText,
  TitleSmallText,
} from '@@components/Text';
import { SafeAreaView } from 'react-native';

function Home() {
  return (
    <SafeAreaView>
      <HeaderLargeText>Header Large Text</HeaderLargeText>
      <HeaderMediumText>Header Medium Text</HeaderMediumText>
      <HeaderSmallText>Header Small Text</HeaderSmallText>
      <TitleLargeText>Title Large Text</TitleLargeText>
      <TitleMediumText>Title Medium Text</TitleMediumText>
      <TitleSmallText>Title Small Text</TitleSmallText>
      <BodyLargeText>Body Large Text</BodyLargeText>
      <BodyMediumText>Body Medium Text</BodyMediumText>
      <BodySmallText>Body Small Text</BodySmallText>
      <BodySmallarText>Body Smallar Text</BodySmallarText>
    </SafeAreaView>
  );
}

export default Home;
