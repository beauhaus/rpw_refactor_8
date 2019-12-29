// import React, { useState, useEffect, useRef } from 'react'
import React from 'react'
import { Link } from 'gatsby';


import eventStyles from './panelevents.module.scss';

const PanelEvents = ({ db }) => {
    console.table(db)
    return (
        db.map((item, idx) => (
            <li key={idx} className={eventStyles[`${item.event.stylecode}`]}>
                <h3 className={eventStyles.evtTitle}>{item.event.title}</h3>
                <span className={eventStyles.evtHours}>{item.event.hours}</span>
                <p className={eventStyles.evtDesc}>{item.event.desc}</p>
                {/* <hr className={eventStyles.evtDivider} /> */}
                <br/>
                <Link className={eventStyles.evtLink} to={item.event.slug}>{item.event.slug ? "find out more!" : "link to event page"}</Link>
            </li>
        ))
    )
};

export default PanelEvents;
