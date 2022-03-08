import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { zIndexes } from '@lib/styles';

type HomeWrapperProps = {
  isMobile: boolean;
};

export const HomeWrapper = styled.div<HomeWrapperProps>`
  position: relative;
  z-index: ${zIndexes.home};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  ${(props) =>
    props.isMobile &&
    css`
      width: 100%;
      height: auto;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
    `}
`;

type HomeImgProps = {
  isMobile: boolean;
};

export const HomeImg = styled.img<HomeImgProps>`
  object-fit: none;
  overflow: visible;

  ${(props) =>
    props.isMobile &&
    css`
      width: 100%;
      object-fit: cover;
      overflow: hidden;
    `}
`;

export const HomeMap = styled.map``;
export const HomeArea = styled.area`
  cursor: pointer;
`;
