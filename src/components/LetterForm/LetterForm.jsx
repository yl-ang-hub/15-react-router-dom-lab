import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LetterForm = (props) => {
  const [formMailbox, setFormMailbox] = useState(1);
  const [formRecipient, setFormRecipient] = useState(
    props.mailboxes[formMailbox - 1].boxOwner
  );
  const [letter, setLetter] = useState("");
  const navigate = useNavigate();

  const handleSelectMailbox = (event) => {
    setFormMailbox(parseInt(event.target.value));
    setFormRecipient((prevState) => {
      return props.mailboxes[parseInt(event.target.value) - 1].boxOwner;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const idx = formMailbox - 1;
    props.setMailboxes((prevState) => {
      const newState = [...prevState];
      newState[idx]["letters"].push({
        recipient: formRecipient,
        message: letter,
      });
      return newState;
    });
    setFormMailbox(1);
    setFormRecipient(props.mailboxes[0].boxOwner);
    setLetter("");
    navigate(`/mailboxes/${idx + 1}`);
  };

  return (
    <form>
      <h1>New Letter</h1>
      <fieldset>
        <label htmlFor="mailbox">Select a Mailbox</label>
        <select value={formMailbox} onChange={handleSelectMailbox}>
          {props.mailboxes.map((box) => {
            return <option value={box._id + 1}>Mailbox {box._id + 1}</option>;
          })}
        </select>
      </fieldset>
      <fieldset>
        <label htmlFor="recipient">Recipient</label>
        <input
          id="owner"
          value={formRecipient}
          onChange={(event) => setFormRecipient(event.target.value)}
          required
        ></input>
      </fieldset>
      <fieldset>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={letter}
          onChange={(event) => setLetter(event.target.value)}
        />
      </fieldset>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default LetterForm;
