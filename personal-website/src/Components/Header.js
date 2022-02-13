import React, { Component } from "react";

class Header extends Component {
  
  render() {
    const componentClassName = [
      "sticky",
      "top-0",
      "bg-emerald-900",
      "grid",
      "place-content-center",
    ].join(" ");

    const itemDivClassName = [
      "grid",
      "grid-flow-col",
      "auto-cols-max",
      "place-content-center",
      "max-w-md",
    ].join(" ");

    const itemClassName = [
      "my-3",
      "w-40",
      "text-center",
      "text-white",
      "hover:font-bold",
    ].join(" ");

    return (
      <nav id="header" className={componentClassName}>
        <div className={itemDivClassName}>
          <a href="#home" className={itemClassName}>Home</a>
          <a href="#about" className={itemClassName}>About</a>
        </div>
      </nav>
    );
  }

}

export default Header;