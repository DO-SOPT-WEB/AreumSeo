import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import axios from "axios";

// 유저에 따른 마이페이지
const MyPage = ({ setOpen }) => {
  const [response, setResponse] = useState("");

  //   const userInfo = useQuery(
  //     // uniqueKey
  //     ["userId"],
  //     // queryFunction
  //     async () =>
  //       await axios
  //         // baseUrl: http://3.39.54.196
  //         // 회원 정보 불러오는 api: /api/v1/members
  //         // 회원가입 성공 시 부여되는 고유 id: /300
  //         .get(`http://3.39.54.196/api/v1/members/300`)
  //         .then(({ data }) => {
  //           // api 통신 성공 시, 반환되는 데이터를 활용하여 set 함수로 상태 값 변경
  //           setResponse(data);
  //         })
  //   );

  //   if (userInfo.isError) return <div> {userInfo.error.message} </div>;
  //   if (userInfo.isLoading) return <div> Loading . . . </div>;

  // 유저 정보를 get 하는 함수
  const getUserInfo = async () => {
    try {
      const res = await axios.get("http://3.39.54.196/api/v1/members/300");
      setResponse(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickLogoutBtn = () => {
    setOpen(false);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <St.UserDetailSection>
      <St.UserDetailArticle>
        <St.UserInfoContainer>
          <St.UserInfo>ID: {response.username}</St.UserInfo>
          <St.UserInfo>NICKNAME: {response.nickname}</St.UserInfo>
        </St.UserInfoContainer>
      </St.UserDetailArticle>

      <St.LogoutBtn onClick={handleClickLogoutBtn}>로그아웃</St.LogoutBtn>
    </St.UserDetailSection>
  );
};

const St = {
  UserDetailSection: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 2rem 3rem;
    border-radius: 2rem;

    background-color: #cf576b;
  `,
  UserDetailArticle: styled.article`
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
