import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../redux/Slices/UserSlice";

const DisplayCard = ({ users }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(remove({ id: id }));
  };

  if (users.length === 0) {
    return <p className="text-center font-semibold text-2xl space-y-3 mt-3">No contacts available.</p>;
  }

  return (
    <div>
      <h1 className="text-2xl mt-5 text-center">Contacts</h1>
      {users.map((user) => (
        <div
          key={user.id}
          className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md mb-4"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">{user.id}</h2>
              <h2 className="text-xl font-semibold">{user.firstName}</h2>
              <h2 className="text-xl font-semibold">{user.lastName}</h2>
            </div>
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                user.status === "active"
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {user.status}
            </span>
          </div>
          <div className="flex mt-4 space-x-2">
            <button className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
              <Link to={`/edit/${user.id}`}>Edit</Link>
            </button>
            <button
              className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
              onClick={() => handleDelete(user.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayCard;
