import React from 'react'

import Layout from '../components/layout'

// import Landing from '../components/landing'

import About from './about'

const Indexpage = () => {
    return (
        <Layout>
            {/* <Landing/> */}
            <h1>hello</h1>
            <About input="hi!" />
        </Layout>
    )
}

export default Indexpage;