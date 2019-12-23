import React, { useState, useEffect, useRef } from 'react'
import Locky from "react-locky";

import wrapStyles from './wrapper.module.scss';
import Content from './content'

const Wrapper = ({ previewDate }) => {
   
    return (
        <div className={wrapStyles.container}>
            <Locky enabled={false} >

             <Content/>
            </Locky>
        </div>
    )
};

export default Wrapper;