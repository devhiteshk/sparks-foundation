import axios from "axios";
import React, { useEffect } from "react";
import AccountsTable from "./AccountsTable";

let baseURL = "https://banking-system-rvpf.onrender.com/api/accounts";

function ViewAccounts({ accounts, setAccounts, setId }) {
  useEffect(() => {
    axios.get(baseURL).then((res) => setAccounts(res.data));
  }, [setAccounts]);

  return <AccountsTable accounts={accounts} setId={setId} />;
}

export default ViewAccounts;
