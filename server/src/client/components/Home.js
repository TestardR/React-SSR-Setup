import React from "react";

const Home = () => {
  return (
    <div>
      <div>I am the home component</div>
      <button onClick={() => console.log("hello world")}>Press me</button>
    </div>
  );
};

export default Home;
