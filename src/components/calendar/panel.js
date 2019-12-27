import React, { useState, useEffect, useRef } from 'react'
import Locky from "react-locky";
import moment from 'moment';
import { gsap } from "gsap";

import panelStyles from './panel.module.scss';
import PanelEvents from './panelevents'

const Panel = ({ previewDate }) => {
    let dateRef = useRef(null)
    useEffect(() => {
        gsap.set(dateRef, { opacity: 0, y: -100 })
        const tl = gsap.timeline({ defaults: { opacity: 1 } })
        tl.to(dateRef, { duration: .6, y: 0, ease: 'elastic(1,0.8)', delay: 0.2 })
    }, [previewDate])

    return (
        <div className={panelStyles.container}>
            <div className={panelStyles.innerWrapper}>
                <h1 className={panelStyles.selectedDate} 
                ref={elem => dateRef = elem}>{moment(previewDate).format("MM/DD")}</h1>
                <Locky enabled={false} >
                    <PanelEvents previewDate={previewDate} />
                </Locky>
            </div>
        </div>
    )
};

export default Panel;