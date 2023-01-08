import React, { useState } from "react";
import axios from "axios";

const baseURL = "https://banking-system-rvpf.onrender.com/api/accounts/new";

function CreateAccounts() {
  const [email, setEmail] = useState("");
  const [ph, setPh] = useState("");
  const [bal, setbal] = useState("");
  const [bakname, setBankname] = useState("");
  const [name, setName] = useState("");

  function createPost(e) {
    e.preventDefault();
    console.log(e.target);
    axios
      .post(baseURL, {
        ph_no: ph,
        holder_name: name,
        bank_name: bakname,
        email: email,
        balance: bal,
      })
      .then((e) => {
        setEmail("");
        setPh("");
        setbal("");
        setBankname("");
        setName("");
      });
  }

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Create Bank Account</h1>

        <p className="mt-4 text-gray-500">
          Enter the details to create your bank account
        </p>
      </div>

      <form
        action="http://localhost:4000/api/accounts/new"
        method="POST"
        className="mx-auto mt-8 mb-0 max-w-md space-y-4"
      >
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>

          <div className="relative">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter your name"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <div className="relative">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter email"
            />
          </div>
        </div>

        <div>
          <label htmlFor="ph-num" className="sr-only">
            Phone Number
          </label>
          <div className="relative">
            <input
              onChange={(e) => setPh(e.target.value)}
              value={ph}
              type="number"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter phone number"
            />
          </div>
        </div>
        <div>
          <label htmlFor="bank-name" className="sr-only">
            Bank Name
          </label>
          <div className="relative">
            <input
              onChange={(e) => setBankname(e.target.value)}
              value={bakname}
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter Bank Name"
            />
          </div>
        </div>
        <div>
          <label htmlFor="balance" className="sr-only">
            Balance
          </label>
          <div className="relative">
            <input
              onChange={(e) => setbal(e.target.value)}
              value={bal}
              type="number"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter balance"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            onClick={createPost}
            className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateAccounts;
