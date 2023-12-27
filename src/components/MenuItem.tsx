import styled from "@emotion/styled";

type Props = {
  title: string;
  index: number;
};

export default function MenuItem({ title, index }: Props) {
  return <ItemWrapper value={index}>{title}</ItemWrapper>;
}

const ItemWrapper = styled.li`
  width: 200px;
  height: 80px;
  background-color: skyblue;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
