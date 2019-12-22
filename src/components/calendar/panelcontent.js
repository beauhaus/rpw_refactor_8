import React, { useState, useEffect, useRef } from 'react'
import { gsap } from "gsap";


import panelContentStyles from './panelcontentstyles.module.scss';


const PrevPanel = ({previewDate}) => {
    const [DBCallParameter, setDBCallParameter] = useState('default')

    useEffect(() => {
        setDBCallParameter(previewDate)
    }, [previewDate])

    let listRef = useRef(null)
    
    useEffect(() => {
        gsap.set(listRef, { opacity: 0, y: 30 })

        const tl = gsap.timeline({ defaults: { opacity: 1 } })

        tl.to(listRef, { duration: .8, y: 0, ease: "back(1.4)" }, '-=0.5')
    
    }, [previewDate])


    const text = Array(30)
        .fill(1)
        .map((x, index) => <li key={index}>{index}</li>);

    return (
                <ul ref={elem => listRef = elem}
                    className={panelContentStyles.previewList}>
                    {text}
                </ul>
    )
};

export default PrevPanel;

/*
      <ul ref={elem => listRef = elem}
                    className={dayPreviewStyles.previewList} >
                    {db.map((item, idx) => (
                        <li key={idx} className={dayPreviewStyles[`${item.event.stylecode}`]}>
                            <p>{item.event.title || "title"}</p>
                            <p>{item.event.hours || "hours"}</p>
                            <p>{item.event.desc || "description"}</p>
                            <Link to={item.event.slug}>{item.event.slug ? "find out more!" : "link to event page"}</Link>
                            <hr />
                        </li>
                    ))}
                </ul> 
                */