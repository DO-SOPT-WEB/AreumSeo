import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { LOGIN_INPUT_CONTENTS } from "../constants/inputContents";
import API from "../libs/api";
import { useState } from "react";
import Toast from "../components/modal/Toast";
import ToastPortal from "../components/modal/ToastPortal";

// 로그인 페이지
const LoginPage = () => {
  const navigator = useNavigate();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  // 입력받은 id와 pw를 저장하는 함수
  const handleChangeInputContents = (e) => {
    switch (e.target.id) {
      case "0":
        setId(e.target.value);
        break;
      case "1":
        setPw(e.target.value);
        break;
      default:
        break;
    }
  };

  // 로그인 시 입력한 값을 post 하는 함수
  const postLoginInfo = () => {
    API.post(
      `/api/v1/members/sign-in`,
      {
        // request body
        username: `${id}`,
        password: `${pw}`,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        navigator(`/mypage/${res.data.id}`);
      })
      .catch((err) => {
        setErrMsg(err.response.data.message);
        handleIsError();
      });
  };

  // 로그인 버튼 클릭 시 동작하는 함수
  const handleClickLoginBtn = () => {
    // id와 pw가 둘 다 입력된 경우에만 api 통신
    if (id && pw) {
      postLoginInfo();
    }
  };

  // isError의 값을 바꿔주는 함수
  const handleIsError = () => {
    setIsError(true);
    setTimeout(() => {
      setIsError(false);
    }, 2000);

    return clearTimeout(() => {
      setIsError(false);
    });
  };

  // 회원가입 버튼 클릭 시 동작하는 함수
  const handleClickSignupBtn = () => {
    navigator("/signup");
  };

  return (
    <>
      <St.LoginSection>
        <Header headerContents={"LOGIN"} />

        {LOGIN_INPUT_CONTENTS.map((content, idx) => {
          return (
            <St.InputContainer key={idx}>
              <St.InputCategory>{content.category}</St.InputCategory>
              <St.InputContents
                id={idx}
                placeholder={content.placeholder}
                onChange={(e) => handleChangeInputContents(e)}
              />
            </St.InputContainer>
          );
        })}

        <St.ButtonContainer>
          <St.LoginBtn onClick={handleClickLoginBtn} $disabled={!id || !pw}>
            로그인
          </St.LoginBtn>
          <St.SignupBtn onClick={handleClickSignupBtn}>회원가입</St.SignupBtn>
        </St.ButtonContainer>
      </St.LoginSection>

      {isError && (
        <ToastPortal>
          <Toast errMsg={errMsg} />
        </ToastPortal>
      )}
    </>
  );
};

const St = {
  LoginSection: styled.section`
    gap: 0.5rem;
  `,
  InputContainer: styled.article`
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 100%;

    gap: 2rem;
  `,
  InputCategory: styled.p`
    font-size: 1.3rem;
  `,
  InputContents: styled.input`
    padding: 0.5rem;
    width: 15rem;
  `,

  ButtonContainer: styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 1rem;

    gap: 0.5rem;
  `,

  LoginBtn: styled.button`
    padding: 0.5rem 0;

    opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};

    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.darkPink};
    font-size: 1.2rem;
  `,

  SignupBtn: styled.button`
    padding: 0.5rem 0;

    background-color: ${({ theme }) => theme.colors.darkPink};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.2rem;
  `,
};

export default LoginPage;
