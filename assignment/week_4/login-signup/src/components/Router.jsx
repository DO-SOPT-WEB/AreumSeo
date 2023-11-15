import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import MyPage from "../pages/MyPage";
import UserDetailPage from "../pages/UserDetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/mypage" element={<MyPage />}>
          <Route path=":userId" element={<UserDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
