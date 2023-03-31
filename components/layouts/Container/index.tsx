import styled from "@emotion/styled";
import { ReactNode } from "types";

// 레이아웃의 공통 너비를 잡는용도 ex 1024px, 1920px

export default function Container({ children }: ReactNode) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  width: 1024px;
  margin: auto;
`;
