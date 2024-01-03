import styled from "@emotion/styled";
import DisableInput from "./DisableInput";
import { useState } from "react";

export default function PhoneInput() {
  const [phoneCheck, setPhoneCheck] = useState<boolean>(false);

  function handlePhoneCheckButton() {
    setPhoneCheck(true);
  }

  return (
    <PhoneInputWrapper>
      <div className="label3 label">회원정보</div>
      <div className="check">
        <button className="checkPhoneButton" onClick={handlePhoneCheckButton}>
          휴대폰 본인인증
        </button>
        {phoneCheck && (
          <div className="successCheck label3">인증되었습니다.</div>
        )}
      </div>
      <div className="inputs">
        <DisableInput placeholder="김유저" width="120px" />
        <div style={{ flexGrow: 1 }}>
          <DisableInput placeholder="010-0000-000" width="100%" />
        </div>
      </div>
    </PhoneInputWrapper>
  );
}

const PhoneInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  gap: 8px;

  .label {
    color: ${(props) => props.theme.colors.coolGray700};
  }

  .check {
    display: flex;
    align-items: center;
    gap: 16px;

    .checkPhoneButton {
      background-color: ${(props) => props.theme.colors.coolGray800};
      color: white;
      border: none;
      outline: none;
      height: 32px;
      padding: 6px 16px;
      border-radius: ${(props) => props.theme.radius.radius_sm};
    }

    .successCheck {
      color: ${(props) => props.theme.colors.blue_default};
    }
  }

  .inputs {
    display: flex;
    gap: 8px;
  }
`;
