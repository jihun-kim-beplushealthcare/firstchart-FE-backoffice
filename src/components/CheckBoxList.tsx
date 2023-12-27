import styled from '@emotion/styled';
import { MenuType } from '../interface/IMenu';

interface ICheckBoxState {
  isNone: boolean;
  isRead: boolean;
  isWrite: boolean;
}

type CheckBoxType = 'isNone' | 'isRead' | 'isWrite';

type Props = {
  title: MenuType;
  list: ICheckBoxState;
  handleCheckListState: (menu: MenuType, value: any) => void;
  testRef: any;
};

export default function CheckBoxList({ title, list, handleCheckListState, testRef }: Props) {
  function limitOnceBoxChecked(e: React.ChangeEvent<HTMLInputElement>) {
    document.getElementsByName(title).forEach((item: any) => (item.checked = false));
    e.target.checked = true;
  }

  function changeCheckListState(type: CheckBoxType) {
    const checkState: ICheckBoxState = { isNone: false, isRead: false, isWrite: false };
    checkState[type] = true;
    handleCheckListState(title, checkState);
  }

  function handleCheckboxClick(type: CheckBoxType, e: React.ChangeEvent<HTMLInputElement>) {
    limitOnceBoxChecked(e);
    changeCheckListState(type);
  }

  return (
    <ListWrapper>
      <div ref={testRef}>{title}</div>
      {Object.entries(list).map((item, i) => {
        return (
          <input
            type='checkbox'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckboxClick(item[0] as CheckBoxType, e)}
            name={title}
            defaultChecked={item[1]}
            key={i}
          />
        );
      })}
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;
`;
