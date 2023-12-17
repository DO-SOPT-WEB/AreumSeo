import React from "react";
import MyPage from "./MyPage";

const Home = () => {
  const handleClickBtn = () => {
    return <MyPage />;
  };
  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={handleClickBtn}>goto MyPage</button>
    </div>
  );
};

export default Home;
