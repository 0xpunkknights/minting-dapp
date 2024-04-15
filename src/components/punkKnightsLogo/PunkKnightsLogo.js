import React, { useState } from "react";
import styled from "styled-components";

const Logo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 500px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const PunkKnightsLogo = () => {
  const [CONFIG] = useState({ MARKETPLACE_LINK: "" });

  return (
    // <a href={CONFIG.MARKETPLACE_LINK}>
      <Logo alt={"logo"} src={"/config/images/logo.gif"} />
    // </a>
  );
}
