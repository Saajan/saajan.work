import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <title>Saajan SN</title>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="keywords" content="saajan,sn,sullia,fullstack,javasccript,react,kvg,pindibana,ggreen valley" />
          <meta name="description" content="Saajan SN is the fullstack developer specialized in Javascript Eco system. Has working experience of around 7 years in the Web application development.
          Currently working for Conviva. Saajan sn is also into Music production and into DJing in free time. Has MSc Tech degree from Manipal University and also BE degree from KVG College of engineering, Sullia " />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
            rel="stylesheet"
          />
        </Head>
        <body>
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
