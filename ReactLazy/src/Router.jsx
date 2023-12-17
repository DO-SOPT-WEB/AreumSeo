import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPage from "./MyPage";

import React from "react";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
