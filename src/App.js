import { Inline } from "@bedrock-layout/inline";
import { PadBox } from "@bedrock-layout/padbox";
import styled from "styled-components";

const MenuBar = styled(Inline).attrs(() => ({
  as: PadBox,
  padding: ["md", "xl"],
  stretch: 1,
  gutter: "lg",
  align: "center"
}))`
  background-color: black;
  color: white;
  border-block-end: 1px solid #303030;
`;
export default function App() {
  return (
    <div>
      <MenuBar>
        <div>Logo</div>
        <nav>
          <Inline as="ul" gutter="sm">
            <li>Dashboard</li>
            <li>Jobs</li>
            <li>Apprentice</li>
            <li>Company</li>
          </Inline>
        </nav>
        <input placeholder="search" />
        <div>icon</div>
        <div>profile</div>
      </MenuBar>
    </div>
  );
}
