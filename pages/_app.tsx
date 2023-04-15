import { Global } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import type { AppProps } from 'next/app';
import { global } from 'styles/global';
import theme from 'styles/theme';
import { SetStateAction, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { isLoginAtom } from 'atom/loginAtom';
import Login from './login';
import Layout from '../components/layouts/Layout';
// const Layout = dynamic(() => import('components/layouts/Layout'), {
//   ssr: false,
// });

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [jwt, setJwt] = useState(null);

  useEffect(() => {
    if (jwt === null) {
      router.push('/login');
    }
    const localStorageData: any = localStorage.getItem('jwt');
    setJwt(localStorageData);
  }, [router.pathname]);

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        {jwt === null ? (
          <Component {...pageProps} jwt={jwt} />
        ) : (
          <Layout router={undefined} jwt={jwt}>
            <Component {...pageProps} jwt={jwt} />
          </Layout>
        )}
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
