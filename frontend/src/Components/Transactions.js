import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const tranUrl = "https://banking-system-rvpf.onrender.com/api/transactions";

function Transactions({ setId }) {
  const [transaction, setTransaction] = useState("");
  useEffect(() => {
    getData();
  }, []);

  let transactions = "";

  let getData = () => {
    axios.get(tranUrl).then((res) => setTransaction(res.data.reverse()));
  };

  useEffect(() => {
    getData();
  }, [transactions]);

  if (transaction) {
    transactions = transaction.map((i) => (
      <tbody key={i.date} className="divide-y divide-gray-200">
        <tr>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            {i.from}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">{i.to}</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {new Date(i.date).toUTCString()}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {"$ " + i.money}
          </td>
          <td className="whitespace-nowrap px-4 py-2">
            <strong className="rounded bg-green-100 px-3 py-1.5 text-xs font-medium text-green-700">
              Paid
            </strong>
          </td>
        </tr>
      </tbody>
    ));
  }

  return (
    <div>
      <div className="mt-2 mb-2 flex flex-wrap justify-center gap-4">
        <Link
          className="block rounded bg-indigo-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto"
          to="/view-all-accounts"
        >
          View all Accounts
        </Link>
      </div>
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              <div className="flex items-center gap-2">
                From
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              <div className="flex items-center gap-2">
                To
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              <div className="flex items-center gap-2">
                Date
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              <div className="flex items-center gap-2">
                Amount
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Status
            </th>
          </tr>
        </thead>

        {transactions}
      </table>
    </div>
  );
}

export default Transactions;
