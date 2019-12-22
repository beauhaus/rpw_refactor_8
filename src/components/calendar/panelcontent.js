import React, { useState, useEffect, useRef } from 'react'
import { gsap } from "gsap";

// import allEventsData from '../../hooks/use-alleventspreview';
// const [DBCallParameter, setDBCallParameter] = useState('default')

// useEffect(() => {
//     setDBCallParameter(previewDate)
//     console.log("hi there!")
// }, [previewDate])
// const db = allEventsData(DBCallParameter)
// console.log("DB: ", db)


import panelContentStyles from './panelcontentstyles.module.scss';


const PrevPanel = ({ eventsDB }) => {
    // const [DBCallParameter, setDBCallParameter] = useState('default')

    // useEffect(() => {
    //     setDBCallParameter(previewDate)
    //     console.log("hi there!")
    // }, [previewDate])
    // const db = allEventsData(DBCallParameter)
    // console.log("DB: ", db)

    let listRef = useRef(null)

    useEffect(() => {
        gsap.set(listRef, { opacity: 0, y: -30 })

        const tl = gsap.timeline({ defaults: { opacity: 1 } })

        tl.to(listRef, { duration: .8, y: 0, ease: "back(1.4)" }, '-=0.5')

        console.log("useEff!")
    }, [eventsDB])



    return (
        <ul ref={elem => listRef = elem}
            className={panelContentStyles.previewList}>
            {eventsDB.map((item, idx) => (
                <li key={idx} className={panelContentStyles[`${item.event.stylecode}`]}>
                    <p>{item.event.title || "title"}</p>
                    <p>{item.event.hours || "hours"}</p>
                    <p>{item.event.desc || "description"}</p>
                </li>
            ))}
        </ul>
    )
};

export default PrevPanel;
