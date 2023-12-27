import styled from "@emotion/styled";
import MenuList from "./MenuList";
import { useState } from "react";

const testMenu = [
  {
    id: 1,
    title: "1",
    subList: ["1-1", "1-2", "1-3"],
  },
  {
    id: 2,
    title: "2",
    subList: ["2-1", "2-2", "2-3"],
  },
  {
    id: 3,
    title: "3",
    subList: ["3-1", "3-2", "3-3"],
  },
];

export default function Menu() {
  const [currentMenu, setCurrentMenu] = useState<string>("");

  function handleMenuClick(title: string) {
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
  width: 240px;
  padding: 16px 24px;
  border-right: 1px solid #e6eaec;
  list-style: none;
`;
