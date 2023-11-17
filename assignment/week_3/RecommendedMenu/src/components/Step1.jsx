import styled from "styled-components";
import { useEffect } from "react";

const Step1 = (props) => {
  const {
    clickedFirstCategory,
    setClickedFirstCategory,
    setStep,
    setIsActivated,
  } = props;

  useEffect(() => {
    setStep(1);
    setIsActivated(false);
    if (clickedFirstCategory) {
      setIsActivated(true);
    }
  }, []);

  return (
    <St.CategoryContainer
      onClick={(e) => {
        setClickedFirstCategory(e.target.innerHTML);
        setIsActivated(true);
      }}
    >
      <St.Category $isPicked={clickedFirstCategory === "한식"}>
        한식
      </St.Category>
      <St.Category $isPicked={clickedFirstCategory === "일식"}>
        일식
      </St.Category>
      <St.Category $isPicked={clickedFirstCategory === "중식"}>
        중식
      </St.Category>
    </St.CategoryContainer>
  );
};

const St = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  `,
  Step: styled.p`
    position: absolute;
    top: 0;
    right: -3rem;
  `,
  CategoryContainer: styled.article`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 2rem;

    gap: 1rem;
  `,
  Category: styled.button`
    width: 10rem;
    height: 10rem;

    border-radius: 1rem;

    font-size: 1.3rem;
    color: ${({ $isPicked, theme }) =>
      $isPicked ? theme.colors.white : "black"};
    background-color: ${({ $isPicked, theme }) =>
      $isPicked ? theme.colors.darkPink : theme.colors.white};

    &:hover {
      border: solid 0.3rem ${({ theme }) => theme.colors.darkPink};
    }
  `,
  BtnContainer: styled.div`
    display: flex;
    margin-top: 2.5rem;

    gap: 1rem;
  `,
  Button: styled.button`
    padding: 0.5rem 2rem;
    border-radius: 1rem;

    font-size: 1rem;
    font-weight: bold;
    color: #000;
    opacity: ${({$isActivated}) => ($isActivated ? 1 : 0.5)};
    background-color: ${({ theme }) => theme.colors.lightBlue};

    &:hover {
      color: ${({ theme }) => theme.colors.darkPink};
      background-color: ${({ theme }) => theme.colors.lightPurple};
    }
  `,
};
export default Step1;
