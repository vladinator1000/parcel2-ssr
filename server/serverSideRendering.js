import React from 'react'
import {renderToStaticMarkup} from 'react-dom/server'
import {App} from '../client/App'

export function serverSideRendering(req, res, next) {
  res.send(`<!doctype html>\n${renderToStaticMarkup(Html)}`)
}

const Html = () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
        />
      </head>

      <body>
        <div id="root">
          <App/>
        </div>
      </body>
    </html>
  )
}