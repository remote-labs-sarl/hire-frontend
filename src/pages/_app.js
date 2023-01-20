import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/errorStyle.css"
import "@/styles/loader.css"
import "@/styles/styles.css"
import {SiteLayout} from "@/layouts";

export default function App({ Component, pageProps }) {
  return (
      <>
        <SiteLayout>
          <Component {...pageProps} />
        </SiteLayout>
      </>
  )
}
