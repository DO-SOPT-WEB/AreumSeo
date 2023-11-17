import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigator = useNavigate();
  const handleClickLoginBtn = () => {
    navigator("/login");
  };
  return <St.GoLoginBtn onClick={handleClickLoginBtn}>LOGIN</St.GoLoginBtn>;
};

const St = {
  GoLoginBtn: styled.button`
    padding: 3rem 5rem;
    border: 0.5rem solid ${({ theme }) => theme.colors.purple};
    border-radius: 2rem;

    font-size: 3.5rem;
    font-weight: bold;

    &:hover {
      background-color: ${({ theme }) => theme.colors.purple};
    }
  `,
};

export default HomePage;
