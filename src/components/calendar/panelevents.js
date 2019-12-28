import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'gatsby';


import eventStyles from './panelevents.module.scss';

const PanelEvents = ({ db }) => {
    console.log("db: ", db)
    return (
        db.map((item, idx) => (
            <li key={idx} className={eventStyles[`${item.event.stylecode}`]}>
                <h1 className={eventStyles.evtTitle}>{item.event.title}</h1>
                <span>{item.event.hours}</span>
                <p>{item.event.desc}</p>
                <Link to={item.event.slug}>{item.event.slug ? "find out more!" : "link to event page"}</Link>
                <hr />
            </li>
        ))
    )
};

export default PanelEvents;


/*
    // const [DBCallParameter, setDBCallParameter] = useState('default')

    // useEffect(() => {
    //     setDBCallParameter(previewDate)
    // }, [previewDate])

    // let listRef = useRef(null)
    // useEffect(() => {
    //     gsap.set(listRef, { opacity: 0, y: 60 })
    //     const tl = gsap.timeline({ defaults: { opacity: 1 } })
    //     tl.to(listRef, { duration: 2, y: 0, ease: "back(1.8)" }, '-=0')
    // }, [previewDate])

    // const db = allEventsData(DBCallParameter)

*/