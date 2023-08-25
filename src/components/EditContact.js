import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { update } from "../redux/Slices/UserSlice";

const EditContact = () => {
  const { id } = useParams(); // Access the contact ID from the URL
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);

  // Find the contact to edit based on the ID
  const contactToEdit = users.find((user) => user.id === parseInt(id, 10));

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("active");

  useEffect(() => {
    if (contactToEdit) {
      setFirstName(contactToEdit.firstName);
      setLastName(contactToEdit.lastName);
      setStatus(contactToEdit.status);
    }
  }, [contactToEdit]);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleUpdateClick = (event) => {
    event.preventDefault();
    // Dispatch the action to update the contact
    dispatch(update({ id: parseInt(id, 10), firstName, lastName, status: status }));
    navigate("/");
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md mt-4">
      <form onSubmit={handleUpdateClick}>
        <h1 className="text-xl mb-2 font-semibold">Edit Contact</h1>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
          className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
        />
        <div className="mb-2">
          <label className="block text-sm font-medium">Status:</label>
          <label className="inline-block mr-4">
            <input
              type="radio"
              value="active"
              checked={status === "active"}
              onChange={handleStatusChange}
              className="mr-1"
            />
            Active
          </label>
          <label className="inline-block">
            <input
              type="radio"
              value="inactive"
              checked={status === "inactive"}
              onChange={handleStatusChange}
              className="mr-1"
            />
            Inactive
          </label>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditContact;
