import styled from "styled-components";
import Step2 from "./Step2";
import TasteRecommendation from "./TasteRecommendation";
import { useEffect, useState } from "react";

const Step1 = (props) => {
  const step = props.step;
  const [clickedCategory, setClickedCategory] = useState("");

  const clickedCategoryHandler = (e) => {
    setClickedCategory(e.target.innerHTML);
  };

  const clickedPrevHandler = () => {
    if (step === 1) {
      props.setIsStartClicked(false);
    }
    props.setStep(step - 1);
  };

  const clickedNextHandler = () => {
    if (clickedCategory.length > 0) {
      props.setStep(step + 1);
    }
  };

  useEffect(() => {
    props.setStep(1);
  }, []);

  return step === 0 ? (
    <TasteRecommendation
      setStep={props.step}
      step={step}
      setIsStartClicked={props.setIsStartClicked}
    />
  ) : (
    <St.Container>
      <St.Step>{step}/3</St.Step>
      {step === 2 ? (
        <Step2 setStep={props.setStep} clickedCategory={clickedCategory} />
      ) : (
        <St.CategoryContainer onClick={(e) => clickedCategoryHandler(e)}>
          <St.Category>한식</St.Category>
          <St.Category>일식</St.Category>
          <St.Category>중식</St.Category>
        </St.CategoryContainer>
      )}

      <St.BtnContainer>
        <St.Button onClick={clickedPrevHandler}>이전으로</St.Button>
        <St.Button onClick={clickedNextHandler}>다음으로</St.Button>
      </St.BtnContainer>
    </St.Container>
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

    background-color: ${({ theme }) => theme.colors.lightBlue};

    &:hover {
      color: ${({ theme }) => theme.colors.darkPink};
      background-color: ${({ theme }) => theme.colors.lightPurple};
    }
  `,
};
export default Step1;
