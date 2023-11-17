import styled from "styled-components";

const Header = (props) => {
  const headerContents = props.headerContents;
  return (
    <St.Header>
      <St.HeaderContents>{headerContents}</St.HeaderContents>
    </St.Header>
  );
};

const St = {
  Header: styled.header`
    margin-bottom: 1rem;
  `,
  HeaderContents: styled.h1`
    font-weight: bold;
  `,
};

export default Header;
