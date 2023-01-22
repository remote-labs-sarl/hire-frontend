import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/errorStyle.css"
import "@/styles/loader.css"
import "@/styles/styles.css"
import {SiteLayout} from "@/layouts";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
      <>
          <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta property="og:image"  content="/assets/logos/2.jpeg"/>
              <meta name="twitter:image" content="/assets/logos/2.jpeg"/>
          </Head>
        <SiteLayout>
          <Component {...pageProps} />
        </SiteLayout>
      </>
  )
}
