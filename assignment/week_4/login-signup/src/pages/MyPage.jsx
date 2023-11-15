import { Outlet } from "react-router-dom";

// 마이페이지 초기화면
const MyPage = () => {
  return (
    <div>
      마이 페이지
      <Outlet />
    </div>
  );
};

export default MyPage;
