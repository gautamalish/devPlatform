import React, { useState } from "react";

const UserTable = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", department: "HR", role: "Manager" },
    { id: 2, name: "Jane Smith", department: "Engineering", role: "Developer" },
  ]);

  const handleEdit = (id) => {
    console.log("Edit user with id:", id);
  };
  async function DeleteUser(id) {
    const response = await fetch(
      `https://assessment-api-biay.onrender.com/api-docs/users/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
  }

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-4xl">
        <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Department</th>
              <th className="py-2 px-4 text-left">Role</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.department}</td>
                <td className="py-2 px-4">{user.role}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleEdit(user.id)}
                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => DeleteUser()}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
