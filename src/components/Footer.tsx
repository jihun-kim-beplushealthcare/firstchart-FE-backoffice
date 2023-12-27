import styled from "@emotion/styled";

export default function Footer() {
  return (
    <FooterWrapper>
      <div>Copyright 2023. Beplushealthcare. All rights reserved.</div>
      <div>이용 약관</div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  padding: 8px 24px;
  height: 64px;
  border-top: 1px solid #e6eaec;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
