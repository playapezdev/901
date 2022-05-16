import React, {Fragment} from 'react'
//import Login from "../pages/login"
import Layout from '@containers/Layout'
import Knows from '../pages/Knows.jsx'

import '../styles/global.css'

export default function App() {
  return (
    <Fragment>
        <Layout>
          <Knows />
        </Layout>
    </Fragment>
  )
}
