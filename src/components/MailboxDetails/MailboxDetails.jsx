import React from "react";
import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();

  return (
    <>
      <h1>Mailbox {mailboxId}</h1>
      {mailboxId <= props.mailboxes.length ? (
        <>
          <h2>Details</h2>
          <p>Box Owner: {props.mailboxes[mailboxId - 1].boxOwner}</p>
          <p>Box Size: {props.mailboxes[mailboxId - 1].boxSize}</p>
          <h2>Letters</h2>
          {props.mailboxes[mailboxId - 1].letters.map((letter) => {
            return (
              <div>
                <p>
                  <strong>To: {letter.recipient}</strong>
                </p>
                <p>{letter.message}</p>
              </div>
            );
          })}
        </>
      ) : (
        <h2>404 Mailbox Not Found</h2>
        // TODO: Repair mailbox not found function. Currently it unmounts App.
      )}
    </>
  );
};

export default MailboxDetails;
