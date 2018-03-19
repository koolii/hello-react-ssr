import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const now = new Date()

ReactDOM.hydrate(
  <App renderedAt={now} />,
  document.getElementById('root')
)
