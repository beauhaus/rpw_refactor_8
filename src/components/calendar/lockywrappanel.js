import React from "react";
import Locky from "react-locky";


import lockypanelStyles from './lockypanel.module.scss';

const LockyWrapPanel = () => (
            <div
                className={lockypanelStyles.container}
                // style={{
                //     background: "wheat",
                //     gridRow: "3",
                //     gridColumn: "1",
                //     border: "1px solid red",
                //     overflow: "scroll"
                // }}
            >
                <Locky enabled={false}>
                    inner scrollable

        <div className="div3"
                        style={{
                            background: "pink",
                            overflow: "scroll",
                            height: 200
                        }}
                    >
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