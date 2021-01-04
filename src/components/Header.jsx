import React from "react";

import Navbar from "./Navbar";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="d-flex justify-content-end ps-5">
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
