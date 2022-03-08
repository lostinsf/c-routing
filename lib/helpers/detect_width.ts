export const isMobileWidth = (): boolean => {
  const widthNum = window.innerWidth;

  if (widthNum <= 1140) {
    return true;
  }
  return false;
};
