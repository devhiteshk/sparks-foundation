import { Link } from "react-router-dom";
let content;

function IndiAcc({ id, accounts, person, setPerson }) {
  let sendData = (e) => {};

  let TransferButton = (
    <Link to="/transfer-fund">
      <button
        type="submit"
        onClick={sendData}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
      >
        Transfer Funds
      </button>
    </Link>
  );

  content = (
    <div className="mx-auto max-w-screen-xl px-4 py-20 lg:flex lg:h-screen">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl sm:text-2xl">
          404 🫥 Sesion is Expired Go Back ✅
        </h1>
      </div>
    </div>
  );
  if (id.length > 0) {
    let x = accounts.filter((e) => e._id === id);
    let options = accounts.filter((e) => e._id !== id);

    content = (
      <div className="overflow-x-auto">
        <div className="mx-auto max-w-screen-xl px-4 py-10 lg:flex lg:h-screen">
          <div className="mx-10 max-w-xl">
            <p>
              <strong className="mr-5">Name:</strong> {x[0].holder_name}
            </p>
            <p>
              <strong className="mr-5">Email:</strong> {x[0].email}
            </p>
            <p>
              <strong className="mr-5">Account Number:</strong> {x[0]._id}
            </p>
            <p>
              <strong className="mr-5">Phone No:</strong> {x[0].ph_no}
            </p>
            <p>
              <strong className="mr-5">bank Name:</strong> {x[0].bank_name}
            </p>
            <p className="text-red-700">
              <strong className="mr-5 text-red-700">Balance:</strong>{" "}
              {"$" + x[0].balance}
            </p>
            <label className="mr-5" htmlFor="cars">
              Choose Person to Transfer Money:
            </label>

            <select
              className="my-5 px-10 border border-gray-300 rounded-lg"
              name="Persons"
              onChange={(e) => setPerson(e.target.value)}
            >
              <option value="">Choose a Person</option>
              {options.map((i) => (
                <option key={i._id} value={i._id}>
                  {i.holder_name}
                </option>
              ))}
            </select>
            <br></br>
            {person ? TransferButton : ""}
          </div>
        </div>
      </div>
    );
  }

  return <>{content}</>;
}

export default IndiAcc;
