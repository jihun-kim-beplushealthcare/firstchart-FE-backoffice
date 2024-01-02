import styled from "@emotion/styled";

export default function Footer() {
  return (
    <FooterWrapper className="body3">
      <div className="info">
        Copyright 2023. Beplushealthcare. All rights reserved.
      </div>
      <div className="guide">
        <div>이용 약관</div>
        <div className="line"></div>
        <div>이용 가이드</div>
        <div className="line"></div>
        <div>이용 도움말</div>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  padding: 0px 24px;
  height: 64px;
  border-top: 1px solid ${(props) => props.theme.colors.coolGray100};
  display: flex;
  align-items: center;
  justify-content: space-between;

  .info {
    color: ${(props) => props.theme.colors.coolGray300};
  }

  .guide {
    display: flex;
    color: ${(props) => props.theme.colors.coolGray500};
    gap: 16px;
    padding: 0px 8px;

    .line {
      background-color: ${(props) => props.theme.colors.coolGray200};
      width: 1px;
      height: 12px;
    }
  }
`;
