import { useEffect, useState } from "react";
import styled from "styled-components";
import OnBoarding from "./OnBoarding";
import RecommendMenu from "./RecommendMenu";
import ShowSelectedCategory from "./ShowSelectedCategory";

const StartRecommend = (props) => {
  const [isResetClicked, setIsResetClicked] = useState(false);
  const [isStartClicked, setIsStartClicked] = useState(false);

  const clickResetHandler = () => {
    setIsResetClicked(true);
    props.setSelectedCategory(false);
    props.setStep(0);
  };

  useEffect(() => {
    props.setStep(0);
  }, []);

  return (
    <>
      <St.ResetBtn onClick={clickResetHandler}>처음으로</St.ResetBtn>
      {isResetClicked && <OnBoarding />}

      {isStartClicked ? (
        <RecommendMenu
          category={props.selectedCategory}
          setStep={props.setStep}
          setIsStartClicked={setIsStartClicked}
          step={props.step}
        />
      ) : (
        <ShowSelectedCategory
          category={props.selectedCategory}
          setIsStartClicked={setIsStartClicked}
        />
      )}
    </>
  );
};

const St = {
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
