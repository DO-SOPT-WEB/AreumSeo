import { useEffect } from "react";
import styled from "styled-components";

const ShowSelectedCategory = (props) => {
  const { category, setIsStartClicked, setStep } = props;

  const clickStartHandler = () => {
    setIsStartClicked(true);
  };

  useEffect(() => {
    setStep(0);
  }, []);

  return (
    <>
      <St.CategoryContainer>
        <St.Category>{category}</St.Category>
      </St.CategoryContainer>

      <St.StartBtn onClick={clickStartHandler}>Start !</St.StartBtn>
    </>
  );
};
const St = {
  CategoryContainer: styled.article`
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

    width: 100%;
    height: 20rem;
    border-radius: 3rem;

    word-break: keep-all;

    font-size: 1.7rem;
    background-color: ${({ theme }) => theme.colors.lightYellow};
  `,
  StartBtn: styled.button`
    margin-top: 1rem;
    padding: 1rem 1.5rem;
    border-radius: 1.5rem;

    font-size: 1.2rem;
    font-weight: bold;
    color: #000;

    background-color: ${({ theme }) => theme.colors.lightBlue};

    &:hover {
      color: ${({ theme }) => theme.colors.darkPink};
      background-color: ${({ theme }) => theme.colors.lightPurple};
    }
  `,
};

export default ShowSelectedCategory;
