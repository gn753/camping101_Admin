import styled from "@emotion/styled";

export default function Header() {
  return (
    <HeaderWrapper>
      header
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: orange;
`;

