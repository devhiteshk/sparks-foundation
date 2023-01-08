// import CreateAccounts from "./Components/CreateAccounts";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewAccounts from "./Components/viewAccounts";
import React, { useEffect, useState } from "react";
import axios from "axios";
import IndiAcc from "./Components/IndiAcc";
import TransferFunds from "./Components/TransferFunds";
import Transactions from "./Components/Transactions";

require("@tailwindcss/forms");
let baseURL = "http://localhost:4000/api/accounts";

function App() {
  const [person, setPerson] = useState("");
  const [accounts, setAccounts] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    axios.get(baseURL).then((res) => setAccounts(res.data));
  }, []);

  return (
    <div className="App">
      <Router>
        {/* <CreateAccounts /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path={"/:id"}
            element={
              <IndiAcc
                accounts={accounts}
                person={person}
                setPerson={setPerson}
                id={id}
              />
            }
          />
          <Route
            exact
            path="/transfer-fund"
            element={
              <TransferFunds
                id={id}
                setId={setId}
                setPerson={setPerson}
                accounts={accounts}
                person={person}
              />
            }
          />
          <Route
            exact
            path="/view-all-accounts"
            element={
              <ViewAccounts
                setAccounts={setAccounts}
                accounts={accounts}
                setId={setId}
              />
            }
          />
          <Route
            exact
            path="/transactions"
            element={<Transactions setId={setId} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
