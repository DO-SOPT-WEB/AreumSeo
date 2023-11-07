import styled from "styled-components";

const StartRecommend = (selectedCategory) => {
  const category = selectedCategory.selectedCategory;

  return (
    <>
      <St.CategoryContainer>
        <St.Category>{category}</St.Category>
      </St.CategoryContainer>

      <St.StartBtn>Start !</St.StartBtn>
    </>
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

    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.purple};

    &:hover {
      color: #000;
      background-color: ${({ theme }) => theme.colors.lightPurple};
    }
  `,
};

export default StartRecommend;
