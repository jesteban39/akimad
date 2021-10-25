import * as React from "react";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import Head from "next/head";

import theme from "../styled/theme";
import store from "../store";

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <React.Fragment>
      <Head>
        <title>Next App</title>
        <link href="/favicon.ico" rel="icon" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
