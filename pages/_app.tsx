import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import { CacheProvider, EmotionCache, Global, ThemeProvider } from '@emotion/react';
import config from '@lib/configs/seo.json';
import { defaultTheme, globalStyles } from '@lib/styles';
import { createEmotionCache } from '@utils/index';
import 'bootstrap/dist/css/bootstrap.min.css';

type MyAppProps = {
  emotionCache?: EmotionCache;
} & AppProps;

interface IMyAppStates {
  isRouteChanging: boolean;
  loadingKey: number;
}

const initMyAppStates: IMyAppStates = {
  isRouteChanging: false,
  loadingKey: 0,
};

function MyApp(props: MyAppProps): JSX.Element {
  const { Component, emotionCache = createEmotionCache(), pageProps } = props;
  const router = useRouter();
  const [state, setState] = useState<IMyAppStates>(initMyAppStates);

  useEffect(() => {
    const handleRouteChangeStart = (): void => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey + 1,
      }));
    };

    const handleRouteChangeEnd = (url: string): void => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }));
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeEnd);
    router.events.on('routeChangeError', handleRouteChangeEnd);

    return (): void => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeEnd);
      router.events.off('routeChangeError', handleRouteChangeEnd);
    };
  }, [router.events]);

  return (
    <CacheProvider value={emotionCache}>
      <DefaultSeo {...config} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      </NextHead>
      <RecoilRoot>
        {/* TODO: Add `Dev tools` and `ExternalStatePortal` for Recoil */}
        <Global styles={globalStyles} />
        <ThemeProvider theme={defaultTheme}>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </ThemeProvider>
      </RecoilRoot>
    </CacheProvider>
  );
}

MyApp.defaultProps = {
  emotionCache: undefined,
} as MyAppProps;

export default appWithTranslation(MyApp);
