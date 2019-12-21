import React from "react";
import Locky from "react-locky";

import prevStyles from './prev.module.scss';


const text = Array(10)
  .fill(1)
  .map((x, index) => <div key={index}>{index}</div>);

const Test = () => (
  <div style={{ border: "1px solid #F00", padding: "32px" }}
  className={prevStyles.test}
  >
   
      {text}
  </div>
);

const Prev = () =>(
    <div className={prevStyles.container}>
      <Locky className={prevStyles.locky}>
          
        <Test />
     
      </Locky>
    </div>
  );

export default Prev;