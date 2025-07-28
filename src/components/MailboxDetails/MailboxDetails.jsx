import React from "react";
import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const params = useParams();

  return (
    <>
      <h1>Mailbox {params.mailboxId}</h1>
      {params.mailboxId <= props.mailboxes.length ? (
        <>
          <h2>Details</h2>
          <p>Box Owner: {props.mailboxes[params.mailboxId - 1].boxOwner}</p>
          <p>Box Size: {props.mailboxes[params.mailboxId - 1].boxSize}</p>
        </>
      ) : (
        <h2>404 Mailbox Not Found</h2>
        // TODO: Repair mailbox not found function. Currently it unmounts App.
      )}
    </>
  );
};

export default MailboxDetails;
