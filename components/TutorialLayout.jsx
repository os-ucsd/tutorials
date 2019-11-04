import Head from 'next/head'
import Link from 'next/link'
import Byline from './Byline'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export default function Layout(props) {
  const {meta} = props;
  return (
    <div style={layoutStyle}>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" rel="stylesheet"/>
        {/*<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css" integrity="sha256-HbgiGHMLxHZ3kkAiixyvnaaZFNjNWLYKD/QG6PWaQPc=" crossorigin="anonymous" />*/}
      </Head>
      <div className="main">
        <div className="Home-Header">
          <Link href="/">
            🏠 Home
          </Link>
        </div>
        <h1>{meta.title}</h1>
        <Byline authors={meta.authors}/>
        <hr/>
        {props.children}
      </div>
      <style global jsx>{`
        h1,
        a {
        }
        body {
          font-family:  "Roboto Mono";
    font-style: normal;
        }
.main {
  margin: auto;
  max-width: 42rem;
  padding:2.625rem 1.3125rem;
  min-height:100vh;
}

.Home-Header {
  font-weight: 700;
  font-size: 1.2rem;
}
img {
  width: 100%;
}
      `}</style>
    </div>
  )
}