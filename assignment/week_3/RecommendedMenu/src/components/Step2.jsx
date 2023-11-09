import { useEffect, useState } from "react";
import styled from "styled-components";

const Step2 = (props) => {
  const [clickedSecondCategory, setClickedSecondCategory] = useState("");

  useEffect(() => {
    props.setStep(2);
  }, []);

  return (
    <St.CategoryContainer
      onClick={(e) => setClickedSecondCategory(e.target.innerHTML)}
    >
      <St.Category $isPicked={clickedSecondCategory === "밥"}>밥</St.Category>
      <St.Category $isPicked={clickedSecondCategory === "면"}>면</St.Category>
      <St.Category $isPicked={clickedSecondCategory === "고기/해산물"}>
        고기/해산물
      </St.Category>
    </St.CategoryContainer>
  );
};

const St = {
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
};

export default Step2;
