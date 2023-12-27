import styled from "@emotion/styled";
import CheckBoxList from "./CheckBoxList";
import useTeamStore from "../store/useTeamStore";
import { MenuType } from "../interface/IMenu";
import { useRef } from "react";

export default function CheckBoxTest() {
  const { operatorTeam, setOperatorTeam } = useTeamStore();
  const testRef = useRef();

  function handleCheckListState(menu: MenuType, value: any) {
    const team = { ...operatorTeam };
    team[menu] = { ...value };
    setOperatorTeam(team);
  }

  return (
    <CheckWrapper>
      {Object.entries(operatorTeam).map((item, i: number) => {
        return (
          <CheckBoxList
            key={i}
            title={item[0] as MenuType}
            list={item[1]}
            handleCheckListState={handleCheckListState}
            testRef={testRef}
          />
        );
      })}
    </CheckWrapper>
  );
}

const CheckWrapper = styled.div`
  background-color: white;
  color: black;
`;
