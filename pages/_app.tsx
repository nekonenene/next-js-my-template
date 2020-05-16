import '../styles/global.scss';
import { AppProps } from 'next/app';
import Head from 'next/head'
import constants from '../lib/constants';
import MyTheme from '../components/MyTheme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={constants.adminTwitterId} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/images/favicon.png" sizes="200x200" />
        <meta name="theme-color" content={MyTheme.palette.primary.main} />

        <title>{constants.siteTitle}</title>
        <meta property="og:title" content={constants.siteTitle} />
        <meta property="og:site_name" content={constants.siteTitle} />
        <meta name="description" content={constants.siteDescription} />
        <meta property="og:description" content={constants.siteDescription} />
        <meta property="og:url" content={constants.siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`https://og-image.now.sh/${encodeURIComponent(
          constants.siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`@${constants.adminTwitterId}`} />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
