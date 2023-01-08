import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
let payer = "";
let person_to_send = "";

const baseUrl = "https://banking-system-rvpf.onrender.com/api/accounts";

function TransferFunds({ id, person, setId, setPerson, accounts }) {
  const [money, setMoney] = useState("");

  let Button = "";
  let error = "";
  let handleClick = () => {
    axios.patch(baseUrl, {
      person: person,
      id: id,
      money: money,
      payer_bal: Number(payer[0].balance) - Number(money),
      rec_bal: Number(person_to_send[0].balance) + Number(money),
    });

    setId("");
    setPerson("");
  };

  if (money[money.length - 1] === "e") {
    let l = money.length - 1;
    setMoney(money.slice(0, l));
  }

  if (person) {
    payer = accounts.filter((i) => i._id === id);
    person_to_send = accounts.filter((e) => e._id === person);

    if (money < 0) {
      error = (
        <div
          role="alert"
          className="rounded mb-4 border-l-4 border-red-500 bg-red-50 p-4"
        >
          <strong className="block font-medium text-red-700">
            {" "}
            Something went wrong{" "}
          </strong>

          <p className="mt-2 text-sm text-red-700">
            Please enter positive amount less than your balance
          </p>
        </div>
      );
    } else if (payer[0].balance - money > 0) {
      Button = (
        <Link to="/transactions">
          <br />
          <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
          >
            Transfer Funds
          </button>
        </Link>
      );
    } else {
      error = (
        <div
          role="alert"
          className="rounded mb-4 border-l-4 border-red-500 bg-red-50 p-4"
        >
          <strong className="block font-medium text-red-700">
            {" "}
            Something went wrong{" "}
          </strong>

          <p className="mt-2 text-sm text-red-700">
            Please enter amount less than your balance
          </p>
        </div>
      );
    }
  }
  return person ? (
    <div className="mx-auto max-w-screen-xl px-4 py-20 lg:flex">
      <div className="mx-auto max-w-xl text-left">
        {error}
        <h1 className="text-2xl">GenZ Payment Portal</h1>
        <p className="py-2 pt-3">
          Pay Money To: <strong> {person_to_send[0].holder_name}</strong>
        </p>
        <p className="py-2">
          Bank Account Number : <strong> {person} </strong>
        </p>
        <p className="py-2 pb-4">
          Your Balance : <strong> {"$  " + payer[0].balance}</strong>
        </p>
        <form method="patch">
          <label className="py-2" htmlFor="pay-amount">
            Enter Amount to Pay:
          </label>
          <br />
          <br />
          <input
            className="py-1 px-4"
            id="pay-amount"
            value={money}
            onChange={(e) => setMoney(e.target.value)}
            placeholder="enter amount"
          />
          <br />
          {Button}
        </form>
      </div>
    </div>
  ) : (
    <div className="mx-auto max-w-screen-xl px-4 py-20 lg:flex">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-2xl">
          {" "}
          Session Has Expired. <br /> Do not reload at Payment Page 👨‍💻
        </h1>
      </div>
    </div>
  );
}

export default TransferFunds;
