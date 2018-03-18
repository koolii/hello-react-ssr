import React from 'react'
import ReactDOMServer from 'react-dom/server'

// renderToStaticMarkup()は本当にplainのHTMLを吐き出してくれる
// その代わりチェックサム等を無いのでクライアントとの変更検知はできない
const html = ReactDOMServer.renderToStaticMarkup(<h1>Hello,SSR!</h1>)

console.log(html)
