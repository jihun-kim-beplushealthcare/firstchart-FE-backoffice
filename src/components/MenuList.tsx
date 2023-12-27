import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import MenuSubList from "./MenuSubList";

type Props = {
  currentMenu: string;
  list: { title: string; subList: string[] };
  handleMenuClick: (title: string) => void;
};

export default function MenuList({
  currentMenu,
  list,
  handleMenuClick,
}: Props) {
  const [viewSubList, setViewSubList] = useState<boolean>(true);

  useEffect(() => {
    if (currentMenu === list.title) {
      setViewSubList(true);
    } else {
      setViewSubList(false);
    }
  }, [currentMenu]);

  function handleSubListClick() {
    if (list.title === currentMenu) {
      return handleMenuClick("");
    }
    handleMenuClick(list.title);
  }

  return (
    <MenuListWrapper>
      <div onClick={handleSubListClick} className="mainMenu h1">
        {list.title}
      </div>
      {viewSubList && (
        <div className="subListContainer">
          <MenuSubList subList={list.subList} />
        </div>
      )}
    </MenuListWrapper>
  );
}

const MenuListWrapper = styled.li`
  padding: 8px;
  border-bottom: 1px solid #f0f0f0;
  background-color: pink;
  border-radius: ${(props) => props.theme.radius.radius_xl};
  color: ${(props) => props.theme.colors.mint_background};

  .mainMenu {
    height: 56px;
    display: flex;
    align-items: center;
  }
`;
