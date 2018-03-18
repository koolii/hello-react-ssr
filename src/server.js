import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import App from './App'

const app = express()

app.get('/', (req, res) => {
  // client.jsの中身をserver側で実装する
  const now = new Date()
  const contentsHTML = ReactDOMServer.renderToString(
    <App renderedAt={now} />
  )
  const fullHTML = ReactDOMServer.renderToStaticMarkup(
    <HTML contents={contentsHTML} />
  )
  res.send(fullHTML)
})

app.get('/client.bundle.js', (req, res) => {
  console.log('GET client.bundle.js file.')
  res.sendFile(path.join(__dirname, '../dist/client.bundle.js'))
})

app.listen(3000, () => {
  console.log('Starting ssr server.')
})

function HTML({ contents }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <title>Simple Server Side Rendering Application</title>
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: contents }}></div>
        {/* /client.bundle.js のURLにGETリクエスト */}
        <script src="client.bundle.js"></script>
      </body>
    </html>
  )
}