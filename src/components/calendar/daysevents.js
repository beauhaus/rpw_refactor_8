import React, { useState, useEffect, useRef } from 'react'
import { gsap } from "gsap";
import {Link} from 'gatsby';

import allEventsData from '../../hooks/use-alleventspreview';

import eventStyles from './daysevents.module.scss';

const Content = ({ previewDate }) => {
    const [DBCallParameter, setDBCallParameter] = useState('default')

    useEffect(() => {
        setDBCallParameter(previewDate)
    }, [previewDate])
  
    let listRef = useRef(null)
    useEffect(() => {
        gsap.set(listRef, { opacity: 0, y: 60 })

        const tl = gsap.timeline({ defaults: { opacity: 1 } })

        tl.to(listRef, { duration: 1, y: 0, ease: "back(1.4)" }, '-=0')
        // console.log("Hallo")
    }, [previewDate])

    const db = allEventsData(DBCallParameter)
   
    return (
            <div className={eventStyles.lockySubdiv}>
                <ul ref={elem => listRef = elem}
                 className={eventStyles.list}
                 >{db.map((item, idx) => (
                    <li key={idx} className={eventStyles[`${item.event.stylecode}`]}>
                        <h1>{item.event.title}</h1>
                        <span>{item.event.hours}</span>
                        <p>{item.event.desc}</p>
                        <Link to={item.event.slug}>{item.event.slug ? "find out more!" : "link to event page"}</Link>
                        <hr />
                    </li>
                    ))}
                </ul>
            </div>
    )
};

export default Content;