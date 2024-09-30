import React, { useEffect } from "react";
import Header from "./Header";
import AddUser from "./modals/AddUser";
import UserTable from "./UsersTable";
const Content = ({ setDisplayUserForm, displayUserForm }) => {
  async function getAllUser() {
    const response = await fetch(
      "https://assessment-api-biay.onrender.com/api-docs/users"
    );
    const result = await response.json();
  }
  useEffect(() => {
    getAllUser();
  }, []);

  
  return (
    <div className="w-full">
      {displayUserForm && <AddUser setDisplayUserForm={setDisplayUserForm} />}
      <div className="w-full">
        <Header />
      </div>
      <div className="flex gap-5">
        <h3 className="text-2xl">Team</h3>
        <button
          className="bg-green-600 ml-10 text-white"
          onClick={() => setDisplayUserForm(true)}
        >
          Add Members
        </button>
        <input
          type="text"
          placeholder="Search members"
          className="border border-gray-300"
        />
      </div>
      <UserTable />
    </div>
  );
};

export default Content;
