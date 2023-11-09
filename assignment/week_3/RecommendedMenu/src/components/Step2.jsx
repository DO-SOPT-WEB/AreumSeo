import { useEffect } from "react";
import styled from "styled-components";

const Step2 = (props) => {
  useEffect(() => {
    props.setStep(2);
  }, []);
  
  return (
    <St.CategoryContainer>
      <St.Category onClick={() => console.log("밥")}>밥</St.Category>
      <St.Category onClick={() => console.log("면")}>면</St.Category>
      <St.Category onClick={() => console.log("고/해")}>
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

    &:hover {
      border: solid 0.3rem ${({ theme }) => theme.colors.darkPink};
    }
  `,
};

export default Step2;
