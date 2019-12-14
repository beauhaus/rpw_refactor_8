import React from 'react'

import aboutStyles from './about.module.scss'

const About =(props) => {
    
    console.log(">about: ", props.input)

    return(
        <div className={aboutStyles.container}>
            <h1>H1</h1>
        </div>
    )
}

export default About;