import styled from "styled-components";

const SelectCategory = (props) => {
  const { setSelectedCategory } = props;
  const clickCategoryHandler = (e) => {
    setSelectedCategory(e.target.innerHTML);
  };

  return (
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
  );
};
const St = {
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

export default SelectCategory;
