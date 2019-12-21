import React, { useState } from "react";
import Locky from "react-locky";


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const text = Array(10)
  .fill(1)
  .map((x, index) => <div>{index}</div>);

const Test = () => (
  <div style={{ border: "1px solid #F00", padding: "32px" }}>
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.2)",
        overflow: "scroll",
        height: 100
      }}
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
    <div style={styles}>
      With Locky. Everything "works":
      <Locky
        // events={getEvents()}
        // noDefault={noDefault}
        // enabled={enabled}
        // onEscape={onEscape}
      >
        {/* <br />
        <div style={{ textAlign: "left" }}>
          <button onClick={this.toggleDP}>
            {!this.state.noDefault ? "enable" : "disable"}
          </button>
          no-default-props (will disable all default hooks()
          <br />
          <button onClick={this.toggleSC}>
            {!this.state.scroll ? "enable" : "disable"}
          </button>
          no-scroll
          <br />
          <button onClick={this.toggleKD}>
            {!this.state.keydown ? "enable" : "disable"}
          </button>
          no-keyDown
          <br />
          <br />
          <button onClick={this.toggleCE}>
            {!this.state.clickToEscape ? "enable" : "disable"}
          </button>
          "clickToEscape", will disable Locky on click outside
        </div>
        <h2>OK. NOW ENABLE LOCKY!</h2>
        (beware! he will steal events!)
        <br />
        Locky
        <button onClick={this.toggle} style={{ fontSize: 18 }}>
          {!enabled ? "enable" : "disable"}
        </button>
        (also toggle to apply changes)
        <br /> */}
        <Test />
      </Locky>
      <br />
      <br />
    </div>
  );
};

export default Prev;