import styled, { css } from "styled-components";
import Header from "../components/Header";
import { SIGNUP_INPUT_CONTENTS } from "../constants/inputContents";
import { useEffect, useState } from "react";
import API from "../libs/api";

// 회원가입 페이지
const SignupPage = () => {
  const [isExistId, setIsExistId] = useState(false);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [checkedPw, setCheckedPw] = useState("");
  const [nickname, setNickname] = useState("");
  const [disabled, setDisabled] = useState(false);

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

  // 입력된 Id 값을 핸들링하는 함수
  const handleChangeIdInputContents = (e) => {
    // 입력된 글자가 모두 지워지면 Id 값 비워주기 + 중복체크 초기화
    if (e.target.value.length === 0 || e.target.value !== id) {
      setId("");
      setIsExistId(false);
    }
  };

  // Id 외의 다른 Input 값을 핸들링하는 함수
  const handleChangeOtherInputContents = (e) => {
    switch (e.target.id) {
      // 비밀번호 Input
      case "1":
        setPw(e.target.value);
        break;

      // 비밀번호 확인 Input
      case "2":
        setCheckedPw(e.target.value);
        break;

      // 닉네임 Input
      case "3":
        setNickname(e.target.value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // id 값이 있고, 중복되는 id가 없고, 비밀번호가 일치하고, 닉네임이 입력된 경우
    id && !isExistId && pw === checkedPw && nickname
      ? setDisabled(false)
      : setDisabled(true);
  }, [id, isExistId, pw, checkedPw, nickname]);

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
                  onChange={(e) => handleChangeIdInputContents(e)}
                />
                <St.DoubleCheckBtn
                  $isExistId={isExistId}
                  $default={!id.length}
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
                onChange={(e) => handleChangeOtherInputContents(e)}
              />
            )}
          </St.InputContainer>
        );
      })}

      <St.SignupBtn $disabled={disabled}>회원가입</St.SignupBtn>
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

    opacity: ${({ $disabled }) => ($disabled ? 0.3 : 1)};
  `,
};

export default SignupPage;
