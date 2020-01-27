import React from "react";

const App = () => {
  return (
    <div>
      <div>I am the App component</div>
      <button onClick={() => console.log("hello world")}>Press me</button>
    </div>
  );
};

export default App;
