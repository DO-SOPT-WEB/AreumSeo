import { useState } from "react";
import styled from "styled-components";
import StartRecommend from "./StartRecommend";
import SelectCategory from "./SelectCategory";

const OnBoarding = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [step, setStep] = useState(0);

  return (
    <St.Container>
      <St.SelectCategoryHeader>
        {step === 0 && <h2>원하는 추천 방식을 골라줘 !</h2>}
        {step === 1 && <h2>오늘은 어떤 종류가 먹고 싶어?</h2>}
        {step === 2 && <h2>그럼 이 중에는 뭐가 끌려?</h2>}
        {step === 3 && <h2>마지막으로 골라줘 !</h2>}
        {step === 4 && <h2>오늘의 추천 음식은 바로 !!</h2>}
      </St.SelectCategoryHeader>

      {selectedCategory ? (
        <StartRecommend
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setStep={setStep}
          step={step}
        />
      ) : (
        <SelectCategory
          setSelectedCategory={setSelectedCategory}
          setStep={setStep}
        />
      )}
    </St.Container>
  );
};

const St = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 3rem 7rem;
    padding: 2rem;
    border-radius: 3rem;

    background-color: ${({ theme }) => theme.colors.green};
  `,
  SelectCategoryHeader: styled.header`
    width: 55rem;
    padding: 1rem 0;
    margin-bottom: 1rem;

    text-align: center;
    border-radius: 1rem;

    background-color: ${({ theme }) => theme.colors.lightYellow};
  `,
};

export default OnBoarding;
