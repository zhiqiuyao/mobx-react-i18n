import React from "react";
import "./button.css";

const Header = ({ type = 'default', children}) => (
    <button className={`btn btn-${type}`}>
        {children}
    </button>
);

export default Header;