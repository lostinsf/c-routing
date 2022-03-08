import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import { HeaderWrapper, HeaderIcon } from './styles';

function Header(): JSX.Element {
  return (
    <HeaderWrapper>
      <HeaderIcon hasIconType="naver" href="https://blog.naver.com/yeshazi" />
      <HeaderIcon hasIconType="facebook" href="https://www.facebook.com/yeshazi" />
    </HeaderWrapper>
  );
}

export default memo(Header, IsEqual);
