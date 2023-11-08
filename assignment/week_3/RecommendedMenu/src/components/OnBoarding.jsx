import { useState } from "react";
import styled from "styled-components";
import StartRecommend from "./StartRecommend";
import SelectCategory from "./SelectCategory";

const OnBoarding = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <St.Container>
      <St.SelectCategoryHeader>
        <h2>원하는 추천 방식을 골라줘 !</h2>
      </St.SelectCategoryHeader>

      {selectedCategory ? (
        <StartRecommend selectedCategory={selectedCategory} />
      ) : (
        <SelectCategory setSelectedCategory={setSelectedCategory} />
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

    margin: 5rem 7rem;
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
