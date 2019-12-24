import React, { useState, useEffect, useRef } from 'react'
import Locky from "react-locky";
import moment from 'moment';
import { gsap } from "gsap";

import panelStyles from './panel.module.scss';
import DaysEvents from './daysevents'

const Panel = ({ previewDate }) => {
    let dateRef = useRef(null)
      useEffect(() => {
        gsap.set(dateRef, { opacity: 0, y: -100 })
        const tl = gsap.timeline({ defaults: { opacity: 1 } })
        tl.to(dateRef, { duration: .6, y: 0, ease: 'elastic(1,0.8)', delay: 0.2 })
    }, [previewDate])

    return (
        <div className={panelStyles.container}>
            <Locky enabled={false} >
            <h1 ref={elem => dateRef = elem}>{moment(previewDate).format("MMM DD")}</h1>
                <DaysEvents previewDate={previewDate} />
            </Locky>
        </div>
    )
};

export default Panel;