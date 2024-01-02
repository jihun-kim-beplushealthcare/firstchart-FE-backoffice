import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import MenuSubList from "./MenuSubList";
import MUNJIN from "@/assets/menuIcon/ic_chart.svg";
import SEND from "@/assets/menuIcon/ic_send_state.svg";
import LOCK from "@/assets/menuIcon/ic_lock.svg";
import GRAPH from "@/assets/menuIcon/ic_graph.svg";
import INFO from "@/assets/menuIcon/ic_info.svg";
import DOWNARROW from "@/assets/bracketsIcon/ic_brackets_down_active_md.svg";
import UPARROW from "@/assets/bracketsIcon/ic_brackets_up_active_md.svg";

type Props = {
  currentMenu: string;
  list: { id: number; title: string; subList: string[] };
  handleMenuClick: (title: string) => void;
};

const srcObj = [MUNJIN, SEND, LOCK, GRAPH, INFO];

export default function MenuList({
  currentMenu,
  list,
  handleMenuClick,
}: Props) {
  const [viewSubList, setViewSubList] = useState<boolean>(false);

  useEffect(() => {
    if (currentMenu === list.title) return setViewSubList(true);
    setViewSubList(false);
  }, [currentMenu]);

  return (
    <MenuListWrapper>
      <div onClick={() => handleMenuClick(list.title)} className="mainMenu">
        <img src={srcObj[list.id - 1]} alt={list.title} className="menuIcon" />
        <div className="h4 menuText">{list.title}</div>
        <img
          src={viewSubList ? UPARROW : DOWNARROW}
          alt="arrow"
          className="menuIcon"
        />
      </div>
      {viewSubList && <MenuSubList subList={list.subList} />}
    </MenuListWrapper>
  );
}

const MenuListWrapper = styled.li`
  /* padding: 8px; */
  border-bottom: 1px solid ${(props) => props.theme.colors.trueGray100};
  color: ${(props) => props.theme.colors.coolGray800};

  .mainMenu {
    height: 56px;
    display: flex;
    align-items: center;
    gap: 8px;

    .menuIcon {
      width: 24px;
      height: 24px;
    }

    .menuText {
      width: 120px;
      height: 24px;
      display: flex;
      align-items: center;
      line-height: normal;
    }
  }
`;
