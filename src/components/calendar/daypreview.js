import React, { useState, useEffect, useRef } from 'react'
import {gsap}  from "gsap";
import moment from 'moment';
import {Link} from 'gatsby'
import dayPreviewStyles from './daypreview.module.scss';
import allEventsData from '../../hooks/use-alleventspreview';
import style from 'styled-components'

const Scrollable = style.div`

    -webkit-overflow-scrolling: touch;
    overflow-y: scroll;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    grid-row: 3;
    grid-column: 1;
    background:lighten( $primary-robinseggblue, 0% );
    margin: 1%;
    padding: 1%;
    
    font-weight: 300;
    box-shadow: inset 0px 4px 6px 0px rgba(0, 0, 0, 0.3);
    max-height: 95%;
    max-width: 95vw;
    text-align: left;
    border: 2px dashed brown;
    border-radius: 5px;
    & > h1 { /*dateRef*/
        opacity: 0;
        font-weight: 300;
        text-align: center;
        // font-style: oblique;
        font-style: normal;
        font-size: 1.8rem;
        // color: $primary-midnightblue;
        color: navy;
        transform: translateY(-200px);
    }
    & > ul.preview-list {
        opacity: 0;
        transform: translateY(30px);
        font-size: 1rem;
        // color: primary-midnightblue;
        color: slateblue;
        padding-left: 0;
        padding: 0 0.5rem 0 0;
        & > li {
            padding-left: 1vw;
            margin-top: 3vh;
            p {
                font-size: 0.8rem;
            }
        }
    }
}
`;

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
    // let overflow = {
    //     "  -webkit-overflow-scrolling": "touch"
    // }
    /***********************/
    return (
        <Scrollable >
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
        </Scrollable>
    )
}

export default DayPreview;
