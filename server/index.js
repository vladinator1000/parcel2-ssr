import express from 'express'

import { serverSideRendering } from './serverSideRendering'

const app = express()

app.use(express.static('dist/client'))
app.get('/*', serverSideRendering)

app.listen(3000, '0.0.0.0')
