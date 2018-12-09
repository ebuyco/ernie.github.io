import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ThirdPage = () => (
    <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 3</p>
    <Link to="/page-2/">Go back to Page2</Link>
  </Layout>
)


export default ThirdPage


