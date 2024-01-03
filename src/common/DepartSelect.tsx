import styled from "@emotion/styled";
import Select from "./Select";

export default function DepartSelect() {
  return (
    <DepartSelectWrapper>
      <Select
        label="진료과 선택"
        width="320px"
        selectValues={["1", "2", "3"]}
        required
        placeholder="진료 과목을 선택해주세요."
      />
      <div className="container label3">진료과를 선택하지 않으셨습니다.</div>
    </DepartSelectWrapper>
  );
}

const DepartSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .container {
    background-color: ${(props) => props.theme.colors.coolGray025};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 144px;
    border-radius: ${(props) => props.theme.radius.radius_md};
    color: ${(props) => props.theme.colors.coolGray300};
  }
`;
