import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/mailboxes">Mailboxes</Link>
      </li>
      <li>
        <Link to="/new-mailbox">New Mailbox</Link>
      </li>
    </ul>
  );
};

export default Navbar;
