import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = (props) => {
  const [formOwner, setFormOwner] = useState("");
  const [formSize, setFormSize] = useState("small");
  const navigate = useNavigate();

  const setMailboxes = () => {
    let idx = 0;
    props.setMailboxes((prevState) => {
      const newMailbox = {
        _id: prevState.length,
        boxOwner: formOwner,
        boxSize: formSize,
      };
      idx = prevState.length + 1;
      setFormOwner("");
      setFormSize("small");
      console.log(prevState);
      console.log(newMailbox);
      return [...prevState, newMailbox];
    });
    console.log(idx);
    navigate(`/mailboxes/${idx}`);
  };

  return (
    <form action="/MailboxList">
      <h1>New Mailbox</h1>
      <fieldset>
        <label htmlFor="owner">Who is the owner?</label>
        <input
          id="owner"
          value={formOwner}
          onChange={(event) => setFormOwner(event.target.value)}
          required
        ></input>
      </fieldset>
      <fieldset>
        <label htmlFor="owner">How big should the mailbox be?</label>
        <select
          id="size"
          value={formSize}
          onChange={(event) => setFormSize(event.target.value)}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </fieldset>
      <button onClick={setMailboxes}>Submit</button>
    </form>
  );
};

export default MailboxForm;
