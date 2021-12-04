import React from 'react'
import { hydrate } from 'react-dom'

import {App} from './App'

const renderTarget = document.getElementById('root')
hydrate(<App />, renderTarget)
