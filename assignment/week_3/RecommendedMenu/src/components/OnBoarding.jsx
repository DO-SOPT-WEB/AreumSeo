import { useState } from "react";
import styled from "styled-components";
import StartRecommend from "./StartRecommend";

const OnBoarding = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const clickCategoryHandler = (e) => {
    setSelectedCategory(e.target.innerHTML);
  };

  return (
    <St.Container>
      <St.SelectCategoryHeader>
        <h2>원하는 추천 방식을 골라줘 !</h2>
      </St.SelectCategoryHeader>

      {selectedCategory ? (
        <StartRecommend selectedCategory={selectedCategory} />
      ) : (
        <St.CategoryContainer>
          <St.Category
            onClick={(e) => {
              clickCategoryHandler(e);
            }}
          >
            취향대로 추천
          </St.Category>
          <St.Category
            onClick={(e) => {
              clickCategoryHandler(e);
            }}
          >
            랜덤 추천
          </St.Category>
        </St.CategoryContainer>
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

    width: 50%;
    height: 20rem;
    border-radius: 3rem;

    word-break: keep-all;

    font-size: 1.7rem;
    background-color: ${({ theme }) => theme.colors.lightYellow};

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.darkGreen};
    }
  `,
};

export default OnBoarding;
