import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/Slices/UserSlice";
import { useNavigate } from "react-router-dom";
import { store } from "../redux/Store";

const AddContact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("active");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    setStatus(event.target.value);
    console.log("New Status:", newStatus); 
    setStatus(newStatus);
  };

  const handleAddClick = (event) => {
    event.preventDefault();
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    // Dispatch the action to add the new contact
    dispatch(
      add({
        id: newId,
        firstName,
        lastName,
        status,
      })
    );
    setFirstName("");
    setLastName("");
    setStatus("active");
    navigate("/");
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
    
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md mt-4">
      <form onSubmit={handleAddClick}>
        <h1 className="text-xl mb-2 font-semibold">Create Contact</h1>
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
          type="submit" // This will trigger the form submission
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;
