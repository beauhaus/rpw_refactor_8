import React, { useState, useEffect, useRef } from 'react'
import Locky from "react-locky";
import moment from 'moment';
import { gsap } from "gsap";


import prevStyles from './prev.module.scss';


const PrevPanel = ({previewDate}) => {

    // useEffect(() => {
    //     setDBCallParameter(previewDate)
    // }, [previewDate])
    let dateRef = useRef(null)

    useEffect(() => {
        gsap.set(dateRef, { opacity: 0, y: -100 })
    //     gsap.set(listRef, { opacity: 0, y: 30 })

        const tl = gsap.timeline({ defaults: { opacity: 1 } })

        tl.to(dateRef, { duration: .6, y: 0, ease: 'elastic(1,0.8)', delay: 0.2 })
    //         .to(listRef, { duration: .8, y: 0, ease: "back(1.4)" }, '-=0.5')
    }, [previewDate])


    const text = Array(30)
        .fill(1)
        .map((x, index) => <li key={index}>{index}</li>);

    return (
        <div className={prevStyles.container}>
            <h1 ref={elem => dateRef = elem}>{moment(previewDate).format("MMM DD")}</h1>
            <Locky className={prevStyles.locky}>
                <ul className={prevStyles.content}>
                    {text}
                </ul>
            </Locky>
        </div>
    )
};

export default PrevPanel;