import { Document, Link, Html, DocumentHead, Main, BlitzScript /*DocumentContext*/ } from "blitz"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <DocumentHead>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
            crossOrigin="crossOrigin"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap"
            rel="stylesheet"
          ></link>
        </DocumentHead>
        <body>
          <Main />
          <BlitzScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
