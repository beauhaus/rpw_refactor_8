import React, { useState, useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { Link } from 'gatsby';

import allEventsData from '../../hooks/use-alleventspreview';

import eventStyles from './panelevents.module.scss';

const Content = ({ previewDate }) => {
    const [DBCallParameter, setDBCallParameter] = useState('default')

    useEffect(() => {
        setDBCallParameter(previewDate)
    }, [previewDate])

    let listRef = useRef(null)
    useEffect(() => {
        gsap.set(listRef, { opacity: 0, y: 60 })
        const tl = gsap.timeline({ defaults: { opacity: 1 } })
        tl.to(listRef, { duration: 2, y: 0, ease: "back(1.8)" }, '-=0')
    }, [previewDate])

    const db = allEventsData(DBCallParameter)

    return (
        <ul ref={elem => listRef = elem}
            className={eventStyles.paneleventsContainer}
        >{db.map((item, idx) => (
            <li key={idx} className={eventStyles[`${item.event.stylecode}`]}>
                <h1 className={eventStyles.evtTitle}>{item.event.title}</h1>
                <span>{item.event.hours}</span>
                <p>{item.event.desc}</p>
                <Link to={item.event.slug}>{item.event.slug ? "find out more!" : "link to event page"}</Link>
                <hr />
            </li>
        ))}
        </ul>
    )
};

export default Content;