import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { zIndexes } from '@lib/styles';

export const HeaderWrapper = styled.header`
  position: fixed;
  z-index: ${zIndexes.header};
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: auto;
`;

type HedearIconProps = {
  hasIconType: string;
};

export const HeaderIcon = styled.a<HedearIconProps>`
  width: 52px;
  height: 52px;
  ${(props) =>
    props.hasIconType === 'naver' &&
    css`
      background: url(https://cheongmac.blob.core.windows.net/common/gif_intro_blog.gif);
    `}
  ${(props) =>
    props.hasIconType === 'facebook' &&
    css`
      background: url(https://cheongmac.blob.core.windows.net/common/gif_intro_facebook.gif);
    `}
`;
