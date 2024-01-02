import styled from "@emotion/styled";
import { useState } from "react";
import MenuList from "./MenuList";

const testMenu = [
  {
    id: 1,
    title: "문진",
    subList: ["1-1", "1-2", "1-3"],
  },
  {
    id: 2,
    title: "발송",
    subList: ["2-1", "2-2", "2-3"],
  },
  {
    id: 3,
    title: "계정 / 권한",
    subList: ["3-1", "3-2", "3-3"],
  },
  {
    id: 4,
    title: "통계",
    subList: ["3-1", "3-2", "3-3"],
  },
  {
    id: 5,
    title: "정보",
    subList: ["3-1", "3-2", "3-3"],
  },
];

export default function Menu() {
  const [currentMenu, setCurrentMenu] = useState<string>("");

  function handleMenuClick(title: string) {
    if (title === currentMenu) return setCurrentMenu("");
    setCurrentMenu(title);
  }

  return (
    <MenuWrapper>
      {testMenu.map((list) => {
        return (
          <MenuList
            currentMenu={currentMenu}
            list={list}
            handleMenuClick={handleMenuClick}
            key={list.id}
          />
        );
      })}
    </MenuWrapper>
  );
}

const MenuWrapper = styled.nav`
  padding: 16px 24px;
  border-right: 1px solid #e6eaec;
  list-style: none;
`;
