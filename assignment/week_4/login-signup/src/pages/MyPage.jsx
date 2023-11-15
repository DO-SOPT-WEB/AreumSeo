import { Outlet } from "react-router-dom";
import Header from "../components/Header";

// 마이페이지 초기화면
const MyPage = () => {
  return (
    <div>
      <Header headerContents={"MY PAGE"}/>
      <Outlet />
    </div>
  );
};

export default MyPage;
