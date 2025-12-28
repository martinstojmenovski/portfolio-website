import { Html, Head, Main, NextScript } from "next/document";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/portfolio-website" : "";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900|Caveat:400,500,600,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Roboto+Slab:100,300,400,500,700,900&display=auto"
        />

        {/* Vendor CSS */}
        <link rel="stylesheet" href={`${basePath}/assets/css/vendors/bootstrap.css`} />
        <link rel="stylesheet" href={`${basePath}/assets/fonts/font-awesome/css/font-awesome.css`} />
        <link rel="stylesheet" href={`${basePath}/assets/css/vendors/magnific-popup.css`} />
        <link rel="stylesheet" href={`${basePath}/assets/css/vendors/splitting.css`} />
        <link rel="stylesheet" href={`${basePath}/assets/css/vendors/swiper.css`} />
        <link rel="stylesheet" href={`${basePath}/assets/css/vendors/animate.css`} />

        {/* Theme CSS */}
        <link rel="stylesheet" href={`${basePath}/assets/css/style.css`} />
        <link rel="stylesheet" href={`${basePath}/assets/css/dark.css`} />

        {/* Favicons */}
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
