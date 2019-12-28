import React, { useState, useEffect, useRef } from 'react'
import Locky from "react-locky";
import moment from 'moment';
import { gsap } from "gsap";


import lockypanelStyles from './lockypanel.module.scss';

const LockyWrapPanel =  ({ previewDate }) => {
    let dateRef = useRef(null)
    useEffect(() => {
        gsap.set(dateRef, { opacity: 0, y: -100 })
        const tl = gsap.timeline({ defaults: { opacity: 1 } })
        tl.to(dateRef, { duration: .6, y: 0, ease: 'elastic(1,0.8)', delay: 0.2 })
    }, [previewDate])
    return (
    <div className={lockypanelStyles.container} >
         <h1 className={lockypanelStyles.selectedDate}
                ref={elem => dateRef = elem}>{moment(previewDate).format("MM/DD")}</h1>
        <Locky enabled={false}>
            <div className={lockypanelStyles.evtsFrame}>
                <p>1******************************</p>
                <p>2******************************</p>
                <p>3******************************</p>
                <p>4******************************</p>
                <p>5******************************</p>
                <p>6******************************</p>
                <p>7******************************</p>
                <p>8******************************</p>
                <p>9******************************</p>
                <p>*******************************</p>
            </div>
        </Locky>
    </div>
) 
};
export default LockyWrapPanel;