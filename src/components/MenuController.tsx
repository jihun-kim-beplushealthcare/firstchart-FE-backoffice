import styled from "@emotion/styled";
import React from "react";
import useTeamStore from "../store/useTeamStore";
import { MenuType } from "../interface/IMenu";
import MenuItem from "./MenuItem";

const menuItem = ["menu1", "menu2", "menu3"];

export default function MenuController() {
  const { operatorTeam } = useTeamStore();

  function checkMenuAuthority(menu: any) {
    const menuAuthority = operatorTeam[menuItem[menu] as MenuType];
    if (menuAuthority.isNone) return alert("메뉴 열람 안됨");
    console.log(operatorTeam[menuItem[menu] as MenuType]);
  }

  function handleMenuClick(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLLIElement;
    if (target.tagName !== "LI") return;
    checkMenuAuthority(target.value);
  }

  return (
    <MenuControllerStyled onClick={handleMenuClick}>
      {menuItem.map((menu: string, i: number) => {
        return <MenuItem title={menu} index={i} key={i} />;
      })}
    </MenuControllerStyled>
  );
}

const MenuControllerStyled = styled.section`
  display: flex;
  height: 100%;
  list-style: none;
  gap: 20px;
`;
