import React, { useState, useEffect, useRef } from 'react'
import Locky from "react-locky";
import moment from 'moment';
import { gsap } from "gsap";
import PanelEvents from './panelevents'

import allEventsData from '../../hooks/use-alleventspreview';



import calprevpanelStyles from './calprevpanel.module.scss';

const LockyWrapPanel = ({ previewDate }) => {

    const [DBCallParameter, setDBCallParameter] = useState('default')

    useEffect(() => {
        setDBCallParameter(previewDate)
    }, [previewDate])


    let dateRef = useRef(null)
    let listRef = useRef(null)


    useEffect(() => {
        gsap.set(dateRef, { opacity: 0, y: -100 })
        gsap.set(listRef, { opacity: 0, y: 60 })

        const tl = gsap.timeline({ defaults: { opacity: 1 } })
        tl.to(dateRef, { duration: .6, y: 0, ease: 'elastic(1,0.8)', delay: 0.2 })
            .to(listRef, { duration: 2, y: 0, ease: "back(1.8)" }, '-=0')

    }, [previewDate])


    const db = allEventsData(DBCallParameter)

    return (
        <div className={calprevpanelStyles.container} >
            <h1 className={calprevpanelStyles.selectedDate}
                ref={elem => dateRef = elem}>{moment(previewDate).format("MM/DD")}</h1>
            <Locky enabled={false}>
                {/* <div className={calprevpanelStyles.evtsFrame}> */}
                <ul ref={elem => listRef = elem}
                    className={calprevpanelStyles.evtsFrame}
                >
                    <PanelEvents db={db}/>
                </ul>
                {/* </div> */}
            </Locky>
        </div>
    )
};
export default LockyWrapPanel;