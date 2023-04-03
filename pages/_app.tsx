import { Global } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import type { AppProps } from 'next/app';
import { global } from 'styles/global';
import theme from 'styles/theme';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { isLoginAtom } from 'atom/loginAtom';

const Layout = dynamic(() => import('components/layouts/Layout'), {
  ssr: false,
});

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Layout router={undefined} isLogin={isLogin} setIsLogin={setIsLogin}>
          <Component {...pageProps} isLogin={isLogin} setIsLogin={setIsLogin} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
