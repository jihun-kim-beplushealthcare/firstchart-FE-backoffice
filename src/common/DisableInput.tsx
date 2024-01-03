import styled from "@emotion/styled";

type Props = {
  label?: string;
  width: string;
  placeholder: string;
};

export default function DisableInput({ label, width, placeholder }: Props) {
  return (
    <DisableInputWrapper width={width}>
      {label && <div className="label label3">{label}</div>}
      <input type="text" className="input" placeholder={placeholder} />
    </DisableInputWrapper>
  );
}

type StyledType = {
  width: string;
};

const DisableInputWrapper = styled.div<StyledType>`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .label {
    height: 20px;
    color: ${(props) => props.theme.colors.coolGray700};
  }

  .input {
    width: ${(props) => props.width};
    height: 40px;
    background-color: ${(props) => props.theme.colors.trueGray025};
    border-radius: ${(props) => props.theme.radius.radius_md};
    border: 1px solid ${(props) => props.theme.colors.trueGray200};

    &::placeholder {
      padding-left: 16px;
      color: ${(props) => props.theme.colors.trueGray500};
    }
  }
`;
