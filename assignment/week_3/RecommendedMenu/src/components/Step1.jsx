import styled from "styled-components";
import Step2 from "./Step2";
import TasteRecommendation from "./TasteRecommendation";
import { useEffect, useState } from "react";
import Step3 from "./Step3";
import Recommendation from "./Recommendation";

const Step1 = (props) => {
  const step = props.step;
  const [isActivated, setIsActivated] = useState(false);
  const [clickedFirstCategory, setClickedFirstCategory] = useState("");
  const [clickedSecondCategory, setClickedSecondCategory] = useState("");
  const [clickedThirdCategory, setClickedThirdCategory] = useState("");

  const clickedPrevHandler = () => {
    if (step === 1) {
      props.setIsStartClicked(false);
    }
    props.setStep(step - 1);
    setIsActivated(true);
  };

  const clickedNextHandler = () => {
    if (isActivated) {
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
  ) : step === 4 ? (
    <Recommendation
      category={props.category}
      setStep={props.setStep}
      clickedFirstCategory={clickedFirstCategory}
      clickedSecondCategory={clickedSecondCategory}
      clickedThirdCategory={clickedThirdCategory}
      setIsStartClicked={props.setIsStartClicked}
    />
  ) : (
    <St.Container>
      <St.Step>{step}/3</St.Step>
      {step === 1 && (
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
      )}
      {step === 2 && (
        <Step2
          setStep={props.setStep}
          setIsActivated={setIsActivated}
          clickedSecondCategory={clickedSecondCategory}
          setClickedSecondCategory={setClickedSecondCategory}
        />
      )}

      {step === 3 && (
        <Step3
          setStep={props.setStep}
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
          다음으로
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
    opacity: ${(props) => (props.$isActivated ? 1 : 0.5)};
    background-color: ${({ theme }) => theme.colors.lightBlue};

    &:hover {
      color: ${({ theme }) => theme.colors.darkPink};
      background-color: ${({ theme }) => theme.colors.lightPurple};
    }
  `,
};
export default Step1;
