import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

// 로그인 페이지
const LoginPage = () => {
  const INPUT_CONTENTS = [
    { category: "ID", placeholder: "아이디를 입력해주세요." },
    { category: "PASSWORD", placeholder: "비밀번호를 입력해주세요." },
  ];

  const navigator = useNavigate();
  const handleClickSignupBtn = () => {
    navigator("/signup");
  };

  return (
    <St.LoginSection>
      <Header headerContents={"LOGIN"} />

      {INPUT_CONTENTS.map((content, idx) => {
        return (
          <St.InputContainer key={idx}>
            <St.InputCategory>{content.category}</St.InputCategory>
            <St.InputContents
              placeholder={content.placeholder}
            ></St.InputContents>
          </St.InputContainer>
        );
      })}

      <St.ButtonContainer>
        <St.LoginBtn>로그인</St.LoginBtn>
        <St.SignUpBtn onClick={handleClickSignupBtn}>회원가입</St.SignUpBtn>
      </St.ButtonContainer>
    </St.LoginSection>
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
    padding: 0.5rem 3rem 0.5rem 0.3rem;
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

    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.darkPink};
    font-size: 1.2rem;
  `,

  SignUpBtn: styled.button`
    padding: 0.5rem 0;

    background-color: ${({ theme }) => theme.colors.darkPink};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.2rem;
  `,
};

export default LoginPage;
