import styled from "@emotion/styled";
import React from "react";

export default function ContainerLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return <ContainerLayoutWrapper>{children}</ContainerLayoutWrapper>;
}

const ContainerLayoutWrapper = styled.section`
  width: 100%;
  padding: 24px 32px;
  background-color: ${(props) => props.theme.colors.coolGray025};
`;
