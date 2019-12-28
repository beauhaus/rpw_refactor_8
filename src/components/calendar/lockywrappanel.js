import React from "react";
import Locky from "react-locky";


import lockypanelStyles from './lockypanel.module.scss';

const LockyWrapPanel = () => (
    <div className={lockypanelStyles.container} >
        <Locky enabled={false}>
            <div className={lockypanelStyles.evtsFrame}>
                <p>1******************************</p>
                <p>2******************************</p>
                <p>3******************************</p>
                <p>4******************************</p>
                <p>5******************************</p>
                <p>6******************************</p>
                <p>7******************************</p>
                <p>8******************************</p>
                <p>9******************************</p>
                <p>*******************************</p>
            </div>
        </Locky>
    </div>
);
export default LockyWrapPanel;