import styled from "@emotion/styled";
import { ReactNode } from "types";

type LayoutProps = {
  header: ReactNode;
  main: ReactNode;
  footer: ReactNode;
};

export default function Layout({ header, footer, main }: LayoutProps) {
  return (
    <>
      {header}
      <Main id="main">{main}</Main>
      {footer}
    </>
  );
}

const Main = styled.main`
  background: lemonchiffon;
  min-height: calc(100% - 250px);
  padding: 0 1rem 1rem 1rem;
`;
