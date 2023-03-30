import React from "react";
import HeaderStyleWrapper from "./styled";

const Header = () => {
  return (
    <HeaderStyleWrapper>
      <img src={require("@images/doctor.jpg")} alt="" className="header-img" />
    </HeaderStyleWrapper>
  );
};

export default Header;
