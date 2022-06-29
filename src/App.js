import React, { useState } from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Menu from "./components/Menu";
// import Content from "./components/Content";

const StyledMainWrapper = styled.div`
  position: relative;
`;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <StyledMainWrapper>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* <Content /> */}
      <Menu isMenuOpen={isMenuOpen} />
    </StyledMainWrapper>
  );
}

export default App;
