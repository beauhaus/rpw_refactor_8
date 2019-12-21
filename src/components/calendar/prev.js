import React from "react";
import Locky from "react-locky";

import prevStyles from './prev.module.scss';


const Prev = () =>{
    const text = Array(10)
  .fill(1)
  .map((x, index) => <div key={index}>{index}</div>);

return  (
    <div className={prevStyles.container}>
      <Locky className={prevStyles.locky}>
          
      <div className={prevStyles.content}>
      {text}
  </div>
     
      </Locky>
    </div>
  )};

export default Prev;