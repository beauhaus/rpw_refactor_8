import React, { useState, useEffect, useRef } from 'react'
import Locky from "react-locky";

import moment from 'moment';
import { gsap } from "gsap";
// import allEventsData from '../../hooks/use-alleventspreview';

// import PanelContent from './panelcontent'
import prevStyles from './prevpanel.module.scss';
// const [DBCallParameter, setDBCallParameter] = useState('default')





/***********************/

const PrevPanel = ({ previewDate }) => {
    // const [DBCallParameter, setDBCallParameter] = useState('default')

    // useEffect(() => {
    //     setDBCallParameter(previewDate)
    // }, [previewDate])

    let dateRef = useRef(null)
    let listRef = useRef(null)


    // useEffect(() => {
    //     gsap.set(dateRef, { opacity: 0, y: -100 })
    //     gsap.set(listRef, { opacity: 0, y: 30 })

    //     const tl = gsap.timeline({ defaults: { opacity: 1 } })
    //     tl.to(dateRef, { duration: .6, y: 0, ease: 'elastic(1,0.8)', delay: 0.2 })
    //       .to(listRef, { duration: .8, y: 0, ease: "back(1.4)" }, '-=0.5')

    // }, [previewDate])

    // const eventsDB = allEventsData(DBCallParameter)

    return (
        <div className={prevStyles.container}>
            <Locky enabled={false} >

                <h1 ref={elem => dateRef = elem}>{moment(previewDate).format("MMM DD")}</h1>
                {/* <PanelContent ref={elem => listRef = elem} eventsDB={eventsDB} /> */}
                <ul
                    ref={elem => listRef = elem}
                    className={prevStyles.previewList}>
                    {/* {eventsDB.map((item, idx) => (
                <li key={idx} className={prevStyles[`${item.event.stylecode}`]}>
                    <p>{item.event.title || "title"}</p>
                    <p>{item.event.hours || "hours"}</p>
                    <p>{item.event.desc || "description"}</p>
                </li>
            ))} */}
                    <li>
                        <p>P Item 1</p>
                        <p>List Item 2</p>
                        <p>List Item 3</p>
                    </li>
                    <li>
                        <p>P Item 1</p>
                        <p>List Item 2</p>
                        <p>List Item 3</p>
                    </li>
                    <li>
                        <p>P Item 1</p>
                        <p>List Item 2</p>
                        <p>List Item 3</p>
                    </li>
                    <li>
                        <p>P Item 1</p>
                        <p>List Item 2</p>
                        <p>List Item 3</p>
                    </li>
                    <li>
                        <p>P Item 1</p>
                        <p>List Item 2</p>
                        <p>List Item 3</p>
                    </li>
                    <li>
                        <p>P Item 1</p>
                        <p>List Item 2</p>
                        <p>List Item 3</p>
                    </li>
                    <li>
                        <p>P Item 1</p>
                        <p>List Item 2</p>
                        <p>List Item 3</p>
                    </li>
                    <li>
                        <p>P Item 1</p>
                        <p>List Item 2</p>
                        <p>List Item 3</p>
                    </li>
                    <li>
                        <p>P Item 1</p>
                        <p>List Item 2</p>
                        <p>List Item 3</p>
                    </li>
                    <li>
                        <p>P Item 1</p>
                        <p>List Item 2</p>
                        <p>List Item 3</p>
                    </li>
                    <li>
                        <p>P Item 1</p>
                        <p>P Item 2</p>
                        <p>P Item 3</p>
                    </li>
                </ul>
            </Locky>
        </div>
    )
};

export default PrevPanel;