import React from "react";

const Preview = () => {
  const text = ["Oh, My God!", "Oh, My God!", "Oh, My God!", "Oh, My God!", "Oh, My God!", "Oh, My God!", "Oh, My God!", "Oh, My God!"];

  return (
    <div
      style={{
        backgroundColor: "skyblue",
        overflow: "scroll",
        height: 100,
        width: 200 
      }}
    >
      {text.map((item, idx) => (
        <h1>{item}</h1>
      ))}
</div>
  );
};

export default Preview;
