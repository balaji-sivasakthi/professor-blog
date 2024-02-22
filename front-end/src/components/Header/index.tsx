import React from "react";
import Topbar from "./topbar.components";
import Navbar from "./nav-bar.components";
import TopLink from "./header-links";

function Header() {
  return (
    <div>
      <TopLink />
      <Topbar />
      {/* logo of the site  */}
      <Navbar />
    </div>
  );
}

export default Header;
