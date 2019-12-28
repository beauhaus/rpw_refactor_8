import React from "react";
import Locky from "react-locky";



const LockyWrapPanel = () => (
        <div
            className="div1"
            style={{
                display: "grid",
                gridRow: 3,
                gridColumn: 1,
                border: "4px dashed fuchsia"
            }}
        >
            <div
                className="div2"
                style={{
                    background: "wheat",
                    gridRow: "4/7",
                    gridColumn: "3/5",
                    border: "1px solid red",
                    overflow: "scroll"
                }}
            >
                <Locky enabled={false}>
                    inner scrollable
        <div
                        className="div3"
                        style={{
                            background: "pink",
                            overflow: "scroll",
                            position: "relative",
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
                    <button onClick={() => alert("You clicked!")}>click me</button>
                </Locky>
            </div>
        </div>
);
export default LockyWrapPanel;