import styled from "styled-components";

const Header = () => {
  return (
    <St.MainHeader>
      <h1>🍥 오늘의 점메추 🍥</h1>
    </St.MainHeader>
  );
};

const St = {
  MainHeader: styled.header`
    padding: 1.5rem 0;
    text-align: center;

    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
  `,
};

export default Header;
