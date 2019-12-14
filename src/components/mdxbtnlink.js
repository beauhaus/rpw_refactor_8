import React from 'react'

import mdxBtnlinkStyles from './mdxBtnlink.module.scss';

const Btn = ({btnText}) => {
    console.log("btnText", btnText) {
        return(
            <button className={mdxBtnlinkStyles.button}>{btnText}</button>
        )
    }
}

export default Btn;