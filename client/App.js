import React from 'react'

const isBrowser = typeof window !== 'undefined' &&
  typeof window.document !== 'undefined'

if (isBrowser) {
  import('normalize.css')
}

export function App() {
  return <h1>Hello, world!</h1>
} 