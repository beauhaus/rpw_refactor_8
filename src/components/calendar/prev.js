import React, { useState } from "react";
import Locky from "react-locky";

import prevStyles from './prev.module.scss';


const text = Array(10)
  .fill(1)
  .map((x, index) => <div key={index}>{index}</div>);

const Test = () => (
  <div style={{ border: "1px solid #F00", padding: "32px" }}
  className={prevStyles.test}
  >
    <div
      style={{
        // backgroundColor: "rgba(0,0,0,0.2)",
        // overflow: "scroll",
        // height: 100
      }}
      className={prevStyles.subDiv}
    >
      {text}
    </div>
  </div>
);

const Prev = () => {
  //  state = {
  //     enabled: false,
  //     noDefault: false,
  //     scroll: true,
  //     clickToEscape: false
  //   };
  const [enabled, setEnabled] = useState(false);
  // const [noDefault, setNoDefault] = useState(false);
  // const [scroll, setScroll] = useState(false);
  // const [clickToEscape, setClickToEscape] = useState(false);

  // const onEscape = () => {
  //   if (clickToEscape) {
  //     setEnabled(false);
  //   }
  // };

  // toggle = () => this.setState({ enabled: !this.state.enabled });
  // toggleDP = () => this.setState({ noDefault: !this.state.noDefault });
  // toggleSC = () => this.setState({ scroll: !this.state.scroll });
  // toggleKD = () => this.setState({ keydown: !this.state.keydown });
  // toggleCE = () => this.setState({ clickToEscape: !this.state.clickToEscape });

  // const getEvents = () => {
  //   const ret = {
  //     scroll,
  //     clickToEscape
  //   };
  // };
  

  return (
    <div className={prevStyles.container}>
      <Locky
        className={prevStyles.locky}
      >
        
        <Test />
      </Locky>
      
    </div>
  );
};

export default Prev;