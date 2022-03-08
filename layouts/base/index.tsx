import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import { Header } from '@components/index';
import { BaseWrapper } from './styles';

type BaseLayoutProps = {
  children: JSX.Element;
};

function BaseLayout(props: BaseLayoutProps): JSX.Element {
  const { children } = props;

  return (
    <BaseWrapper>
      <Header />
      {children}
    </BaseWrapper>
  );
}

export default memo(BaseLayout, IsEqual);
