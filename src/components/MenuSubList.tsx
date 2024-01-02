import styled from "@emotion/styled";

type Props = {
  subList: string[];
};

export default function MenuSubList({ subList }: Props) {
  return (
    <SubListWrapper>
      {subList.map((list: string, i: number) => {
        return (
          <li className="list h5" key={i}>
            {list}
          </li>
        );
      })}
    </SubListWrapper>
  );
}

const SubListWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  padding-bottom: 16px;

  .list {
    padding: 8px 16px 8px 40px;
    color: ${(props) => props.theme.colors.coolGray600};
  }
`;
