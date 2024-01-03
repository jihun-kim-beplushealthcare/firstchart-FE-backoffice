import styled from "@emotion/styled";
import { HTMLInputTypeAttribute } from "react";
import REQUIRED from "@/assets/ic_require.svg";

type Props = {
  label: string;
  required: boolean;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  width: string;
  // handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  label,
  required,
  type,
  placeholder,
  width,
  // handleChangeInput,
}: Props) {
  return (
    <InputWrapper width={width}>
      <div className="label label3">
        {label}
        {required && <img src={REQUIRED} alt="required" />}
      </div>
      <input type={type} className="input" placeholder={placeholder} />
    </InputWrapper>
  );
}

type Wrapper = {
  width: string;
};

const InputWrapper = styled.div<Wrapper>`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .label {
    height: 20px;
    color: ${(props) => props.theme.colors.coolGray700};
  }

  .input {
    padding: 0;
    width: ${(props) => props.width};
    height: 42px;
    border: 1px solid ${(props) => props.theme.colors.coolGray300};
    border-radius: ${(props) => props.theme.radius.radius_md};

    &::placeholder {
      padding-left: 16px;
      color: ${(props) => props.theme.colors.coolGray400};
    }
  }
`;
