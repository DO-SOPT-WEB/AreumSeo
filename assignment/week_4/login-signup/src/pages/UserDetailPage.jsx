import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

// 유저에 따른 마이페이지
const UserDetailPage = () => {
  const { username, nickname } = useLocation().state;
  const navigator = useNavigate();

  const handleClickLogoutBtn = () => {
    navigator("/login");
  };

  return (
    <>
      <St.UserDetailContainer>
        <St.UserImg src="../src/asset/userImg.png" />

        <St.UserInfoContainer>
          <St.UserInfo>ID: {username}</St.UserInfo>
          <St.UserInfo>NICKNAME: {nickname}</St.UserInfo>
        </St.UserInfoContainer>
      </St.UserDetailContainer>

      <St.LogoutBtn onClick={handleClickLogoutBtn}>로그아웃</St.LogoutBtn>
    </>
  );
};

const St = {
  UserDetailContainer: styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 1rem;
  `,
  UserImg: styled.img`
    width: 13rem;
    height: 11rem;
  `,
  UserInfoContainer: styled.div`
    display: flex;
    flex-direction: column;

    gap: 1.5rem;
  `,
  UserInfo: styled.p`
    padding: 0.5rem 1.5rem;
    border-radius: 1rem;

    color: ${({ theme }) => theme.colors.darkPink};
    background-color: ${({ theme }) => theme.colors.white};
    font-size: 1.2rem;
  `,
  LogoutBtn: styled.button`
    margin: 1rem 0 0.5rem;
    padding: 0.5rem 1.5rem;
    border-radius: 1rem;
    border: 0.3rem solid ${({ theme }) => theme.colors.white};

    background-color: ${({ theme }) => theme.colors.darkPink};
    color: ${({ theme }) => theme.colors.white};

    font-size: 1.2rem;

    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.darkPink};
    }
  `,
};

export default UserDetailPage;
