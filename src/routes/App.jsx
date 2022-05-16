import React, {Fragment} from 'react'
import Login from "../pages/login"
import Layout from '@containers/Layout'

export default function App() {
  return (
    <Fragment>
        <Layout>
          <Login />
        </Layout>
    </Fragment>
  )
}
