import React, { useState, useEffect, useRef } from 'react'
import {gsap}  from "gsap";
import moment from 'moment';
import {Link} from 'gatsby'
import dayPreviewStyles from './daypreview.module.scss';
import allEventsData from '../../hooks/use-alleventspreview';

const DayPreview = ({ previewDate }) => {
    const [DBCallParameter, setDBCallParameter] = useState('default')

    useEffect(() => {
        setDBCallParameter(previewDate)
    }, [previewDate])

    let dateRef = useRef(null)
    let listRef = useRef(null)

    useEffect(() => {
        gsap.set(dateRef, { opacity: 0, y: -100 })
        gsap.set(listRef, { opacity: 0, y: 30 })

        const tl = gsap.timeline({ defaults: { opacity: 1 } })

        tl.to(dateRef, { duration: .6, y: 0, ease: 'elastic(1,0.8)', delay: 0.2 })
          .to(listRef, { duration: .8, y: 0, ease: "back(1.4)" }, '-=0.5')
    }, [previewDate])

    const db = allEventsData(DBCallParameter)

    /***********************/
    return (
        <div className={dayPreviewStyles.container}>
            <h1 ref={elem => dateRef = elem}>{moment(previewDate).format("MMM DD")}</h1>
            <ul ref={elem => listRef = elem}
                className={dayPreviewStyles.previewList} >
                {db.map((item, idx) => (
                    <li key={idx} className={dayPreviewStyles[`${item.event.stylecode}`]}>
                        <p>{item.event.title || "title"}</p>
                        <p>{item.event.hours|| "hours"}</p>
                        <p>{item.event.desc|| "description"}</p>
                        <Link to={item.event.slug}>{item.event.slug? "find out more!":"link to event page"}</Link>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DayPreview;
