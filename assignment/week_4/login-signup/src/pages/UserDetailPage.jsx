import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import API from "../libs/api";

// 유저에 따른 마이페이지
const UserDetailPage = () => {
  const { userId } = useParams();
  const navigator = useNavigate();

  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");

  // 유저 정보를 get 하는 함수
  const getUserInfo = () => {
    API.get(`/api/v1/members/${userId}`, {
      params: {
        memberId: `${userId}`,
      },
    })
      .then((res) => {
        setId(res.data.username);
        setNickname(res.data.nickname);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleClickLogoutBtn = () => {
    navigator("/login");
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <St.UserDetailContainer>
        <St.UserImg src="../src/asset/userImg.png" />

        <St.UserInfoContainer>
          <St.UserInfo>ID: {id}</St.UserInfo>
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
