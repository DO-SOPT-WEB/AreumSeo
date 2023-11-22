import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

// 유저에 따른 마이페이지
const MyPage = ({ setOpen }) => {
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");

  // 유저 정보를 get 하는 함수
  const getUserInfo = () => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/185`)
      .then((res) => {
        setId(res.data.username);
        setNickname(res.data.nickname);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickLogoutBtn = () => {
    setOpen(false);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <St.UserDetailContainer>
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

    color: #cf576b;
    background-color: white;
    font-size: 1.2rem;
  `,
  LogoutBtn: styled.button`
    margin: 1rem 0 0.5rem;
    padding: 0.5rem 1.5rem;
    border-radius: 1rem;
    border: 0.3rem solid white;

    background-color: #cf576b;
    color: white;

    font-size: 1.2rem;

    &:hover {
      background-color: white;
      color: #cf576b;
    }
  `,
};

export default MyPage;
