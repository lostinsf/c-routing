import { memo, useEffect, useState } from 'react';
import IsEqual from 'react-fast-compare';
import { HomeWrapper, HomeImg, HomeMap, HomeArea } from './styles';

function Home(): JSX.Element {
  const [isCheckMobile, setCheckMobile] = useState<boolean>(false);

  useEffect(() => {
    const widthNum = window.innerWidth;

    if (widthNum <= 1140) {
      setCheckMobile(true);
    }
  }, []);

  const onImgClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <HomeWrapper isMobile={isCheckMobile}>
      {isCheckMobile ? (
        <>
          <HomeImg
            isMobile={isCheckMobile}
            src="https://cheongmac.blob.core.windows.net/common/bg_intro_routing_m_01.png"
            onClick={() => onImgClick('https://혈관.com/')}
          />
          <HomeImg
            isMobile={isCheckMobile}
            src="https://cheongmac.blob.core.windows.net/common/bg_intro_routing_m_02.png"
            onClick={() => onImgClick('http://울산하지정맥류.com/')}
          />
          <HomeImg
            isMobile={isCheckMobile}
            src="https://cheongmac.blob.core.windows.net/common/bg_intro_routing_m_03.png"
            onClick={() => onImgClick('http://대구정맥류.com/')}
          />
        </>
      ) : (
        <>
          <HomeImg
            isMobile={isCheckMobile}
            src="https://cheongmac.blob.core.windows.net/common/bg_intro_routing.png"
            useMap="#Map"
          />
          <HomeMap name="Map" id="Map">
            <HomeArea target="_blank" shape="rect" coords="97,576,276,635" href="https://혈관.com/" />
            <HomeArea target="_blank" shape="rect" coords="696,576,874,633" href="http://울산하지정맥류.com" />
            <HomeArea target="_blank" shape="rect" coords="1120,574,1308,631" href="http://대구정맥류.com/" />
          </HomeMap>
        </>
      )}
    </HomeWrapper>
  );
}

export default memo(Home, IsEqual);
