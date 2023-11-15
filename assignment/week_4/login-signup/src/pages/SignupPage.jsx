import styled, { css } from "styled-components";
import Header from "../components/Header";
import { SIGNUP_INPUT_CONTENTS } from "../constants/inputContents";

// 회원가입 페이지
const SignupPage = () => {
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
                />
                <St.DoubleCheckBtn>{content.doubleBtn}</St.DoubleCheckBtn>
              </St.DoubleCheckContainer>
            ) : (
              <St.InputContents
                placeholder={content.placeholder}
                $idInput={false}
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
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
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
