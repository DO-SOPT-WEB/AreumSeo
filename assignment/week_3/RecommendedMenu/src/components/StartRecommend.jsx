import { useState } from "react";
import styled from "styled-components";
import OnBoarding from "./OnBoarding";

const StartRecommend = (props) => {
  const category = props.selectedCategory;

  const [isResetClicked, setIsResetClicked] = useState(false);
  const clickResetHandler = () => {
    setIsResetClicked(true);
    props.setSelectedCategory(false);
  };

  return (
    <>
      <St.ResetBtn onClick={clickResetHandler}>처음으로</St.ResetBtn>
      {isResetClicked && <OnBoarding />}

      <St.CategoryContainer>
        <St.Category>{category}</St.Category>
      </St.CategoryContainer>

      <St.StartBtn>Start !</St.StartBtn>
    </>
  );
};

const St = {
  CategoryContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 55rem;
    padding: 1rem 0;

    gap: 1rem;
  `,
  Category: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 20rem;
    border-radius: 3rem;

    word-break: keep-all;

    font-size: 1.7rem;
    background-color: ${({ theme }) => theme.colors.lightYellow};
  `,
  StartBtn: styled.button`
    margin-top: 1rem;
    padding: 1rem 1.5rem;
    border-radius: 1.5rem;

    font-size: 1.2rem;
    font-weight: bold;
    color: #000;

    background-color: ${({ theme }) => theme.colors.lightBlue};

    &:hover {
      color: ${({ theme }) => theme.colors.darkPink};
      background-color: ${({ theme }) => theme.colors.lightPurple};
    }
  `,
  ResetBtn: styled.button`
    position: absolute;
    top: 2rem;
    right: 5rem;
    padding: 0.5rem 1.5rem;
    border-radius: 1rem;

    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.lightBlue};

    &:hover {
      color: ${({ theme }) => theme.colors.darkPink};
      background-color: ${({ theme }) => theme.colors.lightPurple};
    }
  `,
};

export default StartRecommend;
