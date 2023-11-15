import styled, { css } from "styled-components";
import Header from "../components/Header";
import { SIGNUP_INPUT_CONTENTS } from "../constants/inputContents";
import { useState } from "react";
import API from "../libs/api";

// 회원가입 페이지
const SignupPage = () => {
  const [isExistId, setIsExistId] = useState(false);
  const [id, setId] = useState("");

  const handleClickDoubleCheckBtn = () => {
    const enteredId = document.querySelector("input").value;

    API.get(`/api/v1/members/check`, {
      params: {
        username: `${enteredId}`,
      },
    })
      .then((res) => {
        const isExist = res.data.isExist;
        if (isExist) {
          setIsExistId(true);
        } else {
          setId(enteredId);
          setIsExistId(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Input 값을 핸들링하는 함수
  const handleChangeInputContents = (e) => {
    handleIdInputContents(e);
  };

  // 입력된 Id 값을 핸들링하는 함수
  const handleIdInputContents = (e) => {
    // 입력된 글자가 모두 지워지면 Id 값 비워주기
    if (e.target.value.length === 0 || e.target.value !== id) {
      setId("");
    }
  };

  return (
    <St.SignupSection>
      <Header headerContents={"SIGN UP"} />

      {SIGNUP_INPUT_CONTENTS.map((content, idx) => {
        return (
          <St.InputContainer key={idx}>
            <St.InputCategory>{content.category}</St.InputCategory>
            {idx === 0 ? (
              <St.DoubleCheckContainer>
                <St.InputContents
                  placeholder={content.placeholder}
                  $idInput={true}
                  onChange={(e) => handleChangeInputContents(e)}
                />
                <St.DoubleCheckBtn
                  $isExistId={isExistId}
                  $default={!id}
                  onClick={handleClickDoubleCheckBtn}
                >
                  {content.doubleBtn}
                </St.DoubleCheckBtn>
              </St.DoubleCheckContainer>
            ) : (
              <St.InputContents
                id={idx}
                placeholder={content.placeholder}
                $idInput={false}
                onChange={(e) => handleChangeInputContents(e)}
              />
            )}
          </St.InputContainer>
        );
      })}

      <St.SignupBtn>회원가입</St.SignupBtn>
    </St.SignupSection>
  );
};

const St = {
  SignupSection: styled.section`
    gap: 0.5rem;
  `,

  InputContainer: styled.article`
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 100%;

    gap: 1rem;
  `,

  InputCategory: styled.p`
    font-size: 1.3rem;
  `,

  InputContents: styled.input`
    padding: 0.5rem;
    width: ${({ $idInput }) => ($idInput ? css`10.7rem` : css`15rem`)};
  `,

  DoubleCheckContainer: styled.div`
    display: flex;
    justify-content: space-between;

    gap: 0.5rem;
  `,

  DoubleCheckBtn: styled.button`
    padding: 0.5rem;
    border-radius: 0.3rem;

    ${({ $isExistId, $default }) =>
      $isExistId
        ? css`
            background-color: ${({ theme }) => theme.colors.lightPink};
            color: ${({ theme }) => theme.colors.darkPink};
          `
        : $default
        ? css`
            background-color: ${({ theme }) => theme.colors.black};
            color: ${({ theme }) => theme.colors.white};
          `
        : css`
            background-color: ${({ theme }) => theme.colors.green};
            color: ${({ theme }) => theme.colors.darkGreen};
          `};
  `,

  SignupBtn: styled.button`
    width: 100%;
    padding: 0.5rem 0;
    margin-top: 1rem;
    border-radius: 0.5rem;

    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.2rem;
  `,
};

export default SignupPage;
