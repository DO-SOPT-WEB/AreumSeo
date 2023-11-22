import { useState } from "react";
import styled from "styled-components";
import MyPage from "./MyPage";

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <Wrapper>
      {isOpen ? (
        <MyPage setOpen={setOpen} />
      ) : (
        <Button
          onClick={() => {
            setOpen(true);
          }}>
          마이페이지로 이동하기
        </Button>
      )}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;
const Button = styled.button``;