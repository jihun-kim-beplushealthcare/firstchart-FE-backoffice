import styled from "@emotion/styled";
import REQUIRED from "@/assets/ic_require.svg";
import DOWN from "@/assets/bracketsIcon/ic_brackets_down_active_md.svg";

type Props = {
  label?: string;
  required: boolean;
  selectValues: string[];
  width: string;
  placeholder?: string;
};

export default function Select({
  label,
  required,
  width,
  selectValues,
  placeholder,
}: Props) {
  return (
    <SelectWrapper width={width}>
      {label && (
        <div className="label label3">
          {label}
          {required && <img src={REQUIRED} alt="required" />}
        </div>
      )}
      <div className="selectbox">
        <select
          className="select"
          defaultValue={placeholder ? "" : selectValues[0]}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {selectValues.map((item, i) => {
            return (
              <option value={item} key={i}>
                {item}
              </option>
            );
          })}
        </select>
        <img
          src={DOWN}
          alt="downImg"
          width={24}
          height={24}
          className="downImg"
        />
      </div>
    </SelectWrapper>
  );
}

type WrapperType = {
  width: string;
};

const SelectWrapper = styled.div<WrapperType>`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .label {
    height: 20px;
    color: ${(props) => props.theme.colors.coolGray700};
  }

  .selectbox {
    position: relative;
    display: flex;
    align-items: center;
    background-color: white;
    cursor: pointer;

    .select {
      width: ${(props) => props.width};
      height: 40px;
      border: 1px solid ${(props) => props.theme.colors.coolGray300};
      border-radius: ${(props) => props.theme.radius.radius_md};
      padding-left: 16px;
      padding-right: 10px;
      outline: none;
      appearance: none;
    }

    .downImg {
      position: absolute;
      right: 10px;
    }
  }
`;
