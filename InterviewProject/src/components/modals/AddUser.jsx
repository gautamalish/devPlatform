import React from "react";
import { useState } from "react";
export default function AddUser({ setDisplayUserForm }) {
  const [formData, setFormData] = useState({ name: "" });
  async function AddUser() {
    const response = await fetch(
      "https://assessment-api-biay.onrender.com/api-docs/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), //sending the data by stringfying
      }
    );
  }
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <form action="">
      <input
        type="text"
        placeholder="Name"
        onChange={handleChange}
        name="name"
      />
      <button className="bg-green-300" onClick={AddUser}>
        Add User
      </button>
      <button
        className="bg-red-400 p-2"
        onClick={() => setDisplayUserForm(false)}
      >
        Close
      </button>
    </form>
  );
}
