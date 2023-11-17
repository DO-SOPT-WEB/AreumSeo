import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";

// 마이페이지 초기화면
const MyPage = () => {
  return (
    <St.MyPageSection>
      <Header headerContents={"MY PAGE"} />
      <Outlet />
    </St.MyPageSection>
  );
};

const St = {
  MyPageSection: styled.section`
    gap: 0.5rem;
  `,
};

export default MyPage;
