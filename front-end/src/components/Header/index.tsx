import React from "react";
import Topbar from "./topbar.components";
import Navbar from "./nav-bar.components";
import Hero from "../Hero";

function Header() {
  return (
    <div>
      <Topbar />
      {/* logo of the site  */}
      <Navbar />
    </div>
  );
}

export default Header;
