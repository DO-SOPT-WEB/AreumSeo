import styled from "styled-components";

const Toast = ({ errMsg }) => {
  return (
    <St.ToastContainer>
      <St.ToastContents>{errMsg}</St.ToastContents>
    </St.ToastContainer>
  );
};

const St = {
  ToastContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  `,
  ToastContents: styled.p`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 17rem;
    height: 2rem;
    margin-bottom: 10rem;
    border-radius: 1rem;

    background-color: ${({ theme }) => theme.colors.black};
    opacity: 0.5;
    font-size: 1rem;
  `,
};

export default Toast;
