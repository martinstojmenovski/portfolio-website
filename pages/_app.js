import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layouts/PreLoader";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>MAST — Web Developer Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Martin Stojmenovski" />
      </Head>

      {loader && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
};

export default App;
