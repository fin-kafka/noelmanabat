/* eslint-disable no-console */
/* eslint-disable react/no-danger */
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';

import '../styles/global.css';
import Loader from '../shared/components/loader';
import CookieAlert from '../shared/components/cookie-alert';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  const spring = {
    type: 'spring',
    damping: 20,
    stiffness: 100,
    when: 'afterChildren'
  };

  return (
    <div>
      <Head>
        <title>Noel Manabat | Senior FullStack Engineer</title>
        <link rel="icon" type="image/png" sizes="32*32" href="nm.png" />
        <meta name="title" content="Noel Manabat | Senior FullStack Engineer" />
        <meta
          name="description"
          content="Noel Manabat is a Senior FullStack Software Engineer from Helsinki, Finland, A seasoned passionate senior fullstack Engineer"
        />
        <meta
          name="keywords"
          content="Noel Manabat, Senior FullStack Engineer , Web Development, Employee, University of the East"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="10 days" />
        <meta name="author" content="Noel Manabat" />
        <meta name="copyright" content="All rights reserved,2021. Noel Manabat" />
        <meta httpEquiv="content-language" content="en" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mananoel-github-io.vercel.app/" />
        <meta property="og:title" content="Noel Manabat | Senior FullStack Software Engineer" />
        <meta
          property="og:description"
          content="Noel Manabat is a Senior FullStack Software Engineer from Helsinki, Finland. Noel is pursuing his undergraduate from the University of the East, Manila."
        />
        <meta
          property="og:image"
          content="https://billboard.srmkzilla.net/api/blog?title=Noel%20Manabat&subtitle=Senior%FullStack%20Engineer&fileType=jpeg&theme=dark&fontSize=180px"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mananoel-github-io.vercel.app" />
        <meta property="twitter:site" content="@noelmanabat" />
        <meta
          property="twitter:title"
          content="Noel Manabat | Senior FullStack Software Engineer"
        />
        <meta
          property="twitter:description"
          content="Noel Manabat is a Senior FullStack Software Engineer from Helsinki, Finland, A seasoned passionate senior fullstack engineer."
        />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <AnimatePresence>
          <div className="page-transition-wrapper overflow-x-hidden min-h-screen">
            <motion.div
              transition={spring}
              key={router.pathname}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              id="page-transition-container">
              {/* <CustomCursor /> */}
              <Component {...pageProps} key={router.pathname} />
            </motion.div>
          </div>
          <CookieAlert />
        </AnimatePresence>
      )}
    </div>
  );
}

export default MyApp;
