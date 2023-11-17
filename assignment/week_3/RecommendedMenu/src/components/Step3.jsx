import styled from "styled-components";
import { useEffect } from "react";

const Step3 = (props) => {
  const {
    clickedThirdCategory,
    setClickedThirdCategory,
    setStep,
    setIsActivated,
  } = props;

  useEffect(() => {
    setStep(3);
    setIsActivated(false);
    if (clickedThirdCategory) {
      setIsActivated(true);
    }
  }, []);

  return (
    <St.CategoryContainer
      onClick={(e) => {
        setClickedThirdCategory(e.target.innerHTML);
        setIsActivated(true);
      }}
    >
      <St.Category $isPicked={clickedThirdCategory === "국물 X"}>
        국물 X
      </St.Category>
      <St.Category $isPicked={clickedThirdCategory === "국물 O"}>
        국물 O
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

export default Step3;
