import React from "react";
import { Link } from "react-router-dom";

const MailboxList = (props) => {
  return (
    <>
      <h1>Mailbox List</h1>
      <ul>
        {props.mailboxes.map((box, idx) => {
          return (
            <li className="mail-box" key={idx}>
              <Link to={`/mailboxes/${box._id + 1}`}>
                Mailbox {box._id + 1}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MailboxList;
