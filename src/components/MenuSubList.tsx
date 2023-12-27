import styled from "@emotion/styled";

type Props = {
  subList: string[];
};

export default function MenuSubList({ subList }: Props) {
  return (
    <SubListWrapper>
      {subList.map((list: string, i: number) => {
        return (
          <li className="fc-font-green" key={i}>
            {list}
          </li>
        );
      })}
    </SubListWrapper>
  );
}

const SubListWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;
