import styled from '@emotion/styled';
import { zIndexes } from '@lib/styles';

export const BaseWrapper = styled.div`
  position: relative;
  z-index: ${zIndexes.base};
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;
