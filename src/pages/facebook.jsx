import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const FacebookPage = () => (
    <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 3</p>
    <Link to="/page-2/">Go back to Page2</Link>
    </Layout>
)

export default FacebookPage