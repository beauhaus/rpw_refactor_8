import React, { useState, useEffect, useRef } from 'react'
// import Locky from "react-locky";

import moment from 'moment';
import { gsap } from "gsap";
import allEventsData from '../../hooks/use-alleventspreview';

import PanelContent from './panelcontent'
import prevStyles from './prev.module.scss';



/***********************/

const PrevPanel = ({ previewDate }) => {
    const [DBCallParameter, setDBCallParameter] = useState('default')

    useEffect(() => {
        setDBCallParameter(previewDate)
    }, [previewDate])

    let dateRef = useRef(null)

    useEffect(() => {
        gsap.set(dateRef, { opacity: 0, y: -100 })

        const tl = gsap.timeline({ defaults: { opacity: 1 } })

        tl.to(dateRef, { duration: .6, y: 0, ease: 'elastic(1,0.8)', delay: 0.2 })
    }, [previewDate])

    const eventsDB = allEventsData(DBCallParameter)

    return (
        <div className={prevStyles.container}>
            <h1 ref={elem => dateRef = elem}>{moment(previewDate).format("MMM DD")}</h1>
            <PanelContent eventsDB={eventsDB} />
        </div>
    )
};

export default PrevPanel;