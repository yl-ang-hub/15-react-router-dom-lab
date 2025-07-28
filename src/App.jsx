import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import Navbar from "./components/NavBar/Navbar";
import LetterForm from "./components/LetterForm/LetterForm";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
              <p>
                Welcome, you may access your mailboxes or create a new one.{" "}
              </p>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path="/new-mailbox"
          element={<MailboxForm setMailboxes={setMailboxes} />}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route
          path="/new-letter"
          element={
            <LetterForm mailboxes={mailboxes} setMailboxes={setMailboxes} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
