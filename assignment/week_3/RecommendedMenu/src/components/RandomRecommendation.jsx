import styled from "styled-components";
import { MENU } from "../constants/menu";

const RandomRecommendation = () => {
  const randomNum = parseInt(Math.random() * 22 + 1);
  const selectedMenu = MENU.filter((it) => it.id === randomNum)[0];
  console.log(selectedMenu);

  return (
    <>
      <St.MenuImg src={selectedMenu.imgURL} />
      <St.MenuTitle>{selectedMenu.description}</St.MenuTitle>
    </>
  );
};

const St = {
  MenuImg: styled.img`
    width: 25rem;
    height: 20rem;
  `,
  MenuTitle: styled.p`
    margin: 1rem 0;
    padding: 0.5rem 2rem;

    border: double 0.7rem ${({ theme }) => theme.colors.lightGreen};

    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.lightGreen};
    background-color: ${({ theme }) => theme.colors.darkGreen};
  `,
};

export default RandomRecommendation;
