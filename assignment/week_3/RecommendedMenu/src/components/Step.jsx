import styled from "styled-components";
import { useEffect, useState } from "react";
import TasteRecommendation from "./TasteRecommendation";
import Recommendation from "./Recommendation";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const Step = (props) => {
  const { step, setStep, setIsStartClicked, category } = props;

  const [isActivated, setIsActivated] = useState(false);
  const [clickedFirstCategory, setClickedFirstCategory] = useState("");
  const [clickedSecondCategory, setClickedSecondCategory] = useState("");
  const [clickedThirdCategory, setClickedThirdCategory] = useState("");

  const clickedPrevHandler = () => {
    if (step === 1) {
      setIsStartClicked(false);
    }
    setStep(step - 1);
    setIsActivated(true);
  };

  const clickedNextHandler = () => {
    if (isActivated) {
      setStep(step + 1);
    }
  };

  useEffect(() => {
    setStep(1);
  }, []);

  return step === 0 ? (
    <TasteRecommendation
      setStep={step}
      step={step}
      setIsStartClicked={setIsStartClicked}
    />
  ) : step === 4 ? (
    <Recommendation
      category={category}
      setStep={setStep}
      clickedFirstCategory={clickedFirstCategory}
      clickedSecondCategory={clickedSecondCategory}
      clickedThirdCategory={clickedThirdCategory}
      setIsStartClicked={setIsStartClicked}
    />
  ) : (
    <St.Container>
      <St.Step>{step}/3</St.Step>
      {step === 1 && (
        <Step1
          setStep={setStep}
          setIsActivated={setIsActivated}
          clickedFirstCategory={clickedFirstCategory}
          setClickedFirstCategory={setClickedFirstCategory}
        />
      )}
      {step === 2 && (
        <Step2
          setStep={setStep}
          setIsActivated={setIsActivated}
          clickedSecondCategory={clickedSecondCategory}
          setClickedSecondCategory={setClickedSecondCategory}
        />
      )}

      {step === 3 && (
        <Step3
          setStep={setStep}
          setIsActivated={setIsActivated}
          clickedThirdCategory={clickedThirdCategory}
          setClickedThirdCategory={setClickedThirdCategory}
        />
      )}

      <St.BtnContainer>
        <St.Button onClick={clickedPrevHandler} $isActivated={true}>
          이전으로
        </St.Button>
        <St.Button onClick={clickedNextHandler} $isActivated={isActivated}>
          {step === 3 ? "결과보기" : "다음으로"}
        </St.Button>
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
    opacity: ${({ $isActivated }) => ($isActivated ? 1 : 0.5)};
    background-color: ${({ theme }) => theme.colors.lightBlue};

    &:hover {
      color: ${({ theme }) => theme.colors.darkPink};
      background-color: ${({ theme }) => theme.colors.lightPurple};
    }
  `,
};
export default Step;
