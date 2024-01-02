import styled from "@emotion/styled";
import HEADERLOGO from "@/assets/header_logo.svg";
import { useState } from "react";

// login시 header
function LoginHeader({ handleLogout }: { handleLogout: () => void }) {
  return (
    <LoginHeaderStyled>
      <img src={HEADERLOGO} alt="header" />
      <div className="info">
        <div className="body5">User Name</div>
        <div className="line"></div>
        <div className="h5 text">개인정보 수정</div>
        <div className="line"></div>
        <div className="h5 text" onClick={handleLogout}>
          로그아웃
        </div>
      </div>
    </LoginHeaderStyled>
  );
}

// login 안되어있을시 header
function UnLoginHeader() {
  return (
    <UnLoginHeaderStyled>
      <img src={HEADERLOGO} alt="header" />
    </UnLoginHeaderStyled>
  );
}

export default function Header() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  function handleLogout() {
    setIsLogin(false);
  }

  return isLogin ? (
    <LoginHeader handleLogout={handleLogout} />
  ) : (
    <UnLoginHeader />
  );
}

const UnLoginHeaderStyled = styled.header`
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0px 16px 0px 168px;
  border-bottom: 1px solid ${(props) => props.theme.colors.coolGray100};

  .logo {
    width: 160px;
    height: 32px;
  }
`;

const LoginHeaderStyled = styled.header`
  height: 64px;
  padding: 0px 24px;
  color: ${(props) => props.theme.colors.coolGray700};
  border-bottom: 1px solid ${(props) => props.theme.colors.coolGray100};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .info {
    display: flex;
    align-items: center;
    padding: 0px 8px;
    gap: 16px;

    .line {
      width: 1px;
      height: 12px;
      background-color: ${(props) => props.theme.colors.coolGray200};
    }

    .text {
      cursor: pointer;
    }
  }
`;
