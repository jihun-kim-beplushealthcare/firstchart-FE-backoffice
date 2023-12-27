import styled from "@emotion/styled";

export default function Header() {
  return (
    <HeaderStyled>
      <div>logo</div>
      <div>info</div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  height: 64px;
  padding: 8px 16px;
  border-bottom: 1px solid #e6eaec;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
