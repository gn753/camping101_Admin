import { Global } from "@emotion/react";
import { ThemeProvider } from "@emotion/react";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import { global } from "styles/global";
import theme from "styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
