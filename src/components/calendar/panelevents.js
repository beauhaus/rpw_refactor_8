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
                <br />
                <span className={eventStyles.evtLink}>
                    <Link to={item.event.slug}>{"find out more"}</Link>
                </span>
            </li>
        ))
    )
};

export default PanelEvents;
