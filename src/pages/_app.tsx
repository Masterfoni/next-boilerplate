import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Next.js Boilerplate</title>
        <link rel="shortcut icon" href="img/icon-512.png" />
        <link rel="apple-touch-icon" href="img/icon-192.png" />
        <meta
          name="description"
          content="Project template to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />;
    </>
  );
}

export default App;
