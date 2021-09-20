import React from 'react'

import Head from '../components/head'
import Error from '../components/wrongPage'

const NotFound = () => {
  return (
    <div>
      <Head title="404"/>
      <Error/>
    </div>
  )
}

export default NotFound