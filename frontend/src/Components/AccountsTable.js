import { React } from "react";
import { Link } from "react-router-dom";
let account;

function AccountsTable({ accounts, setId }) {
  if (accounts.length > 1) {
    account = accounts.map((a) => (
      <tr key={a._id}>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          {a.holder_name}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{a._id}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {a.bank_name}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-blue-500">
          {a.balance}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {
            <div className="mt-0 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded bg-cyan-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-cyan-800 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                to={"/" + a._id}
                onClick={(e) => setId(a._id)}
              >
                Select
              </Link>
            </div>
          }
        </td>
      </tr>
    ));
  }
  return (
    <>
      <div className="mt-2 mb-2 flex flex-wrap justify-center gap-4">
        <h1 className="text-3xl py-1 px-3 content-center font-extrabold  sm:text-2xl">
          All Accounts
        </h1>
        <Link
          className="block rounded bg-indigo-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto"
          to="/"
        >
          Home
        </Link>
        <Link
          className="block rounded bg-indigo-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto"
          to="/transactions"
        >
          All Transactions
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
          <thead>
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Account No.
              </th>
              {/* <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Ph No.
            </th> */}
              {/* <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Email
            </th> */}
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Bank Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Balance
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">{account}</tbody>
        </table>
      </div>
    </>
  );
}

export default AccountsTable;
