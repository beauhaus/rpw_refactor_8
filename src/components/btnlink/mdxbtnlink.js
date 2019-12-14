import React from 'react'

import mdxBtnlinkStyles from './mdxBtnlink.module.scss';

const Btn = ({ btnText }) => (
    <div className={mdxBtnlinkStyles.container}>
        <button className={mdxBtnlinkStyles.button}>{btnText}</button>
        {/* <img src={} alt="this is my grandma"/> */}
    </div>
)

export default Btn;