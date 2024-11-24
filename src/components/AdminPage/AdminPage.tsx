import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getClients from "../../utils/airtable/getClients";
import { Clients, Client, Status } from "../../utils/types/client";
import ClientRow from "../ui/ClientRow";
import updateClient from "../../utils/airtable/updateClient";
import deleteClient from "../../utils/airtable/deleteClient";

const AdminPage = () => {
  const [clients, setClients] = useState<Clients>([]);
  const [editingClientId, setEditingClientId] = useState<string | null>(null);
  const [editData, setEditData] = useState<
    Partial<Pick<Client, "notes" | "status">>
  >({
    notes: "",
    status: Status.NOT_CONTACTED,
  });

  useEffect(() => {
    getClients(setClients);
  }, []);

  const handleEditChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = async (id: string) => {
    const updatedClient = await updateClient(id, editData);
    if (updatedClient) {
      setClients((prev) =>
        prev.map((client) =>
          client.id === id ? { ...client, ...editData } : client
        )
      );
      setEditingClientId(null);
    }
  };

  const handleDelete = async (id: string) => {
    const isDeleted = await deleteClient(id);
    if (isDeleted) {
      setClients((prev) => prev.filter((client) => client.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Admin Panel</h2>
        <Link
          to="/"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 active:bg-blue-700 focus:outline-none"
        >
          Back to Form
        </Link>
      </div>
      <div className="overflow-x-auto bg-gray-700 p-4 rounded-lg shadow-lg">
        <table className="w-full table-auto text-left text-gray-300">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Notes</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <ClientRow
                key={client.id}
                client={client}
                isEditing={editingClientId === client.id}
                editData={editData}
                handleEditChange={handleEditChange}
                handleEditSubmit={handleEditSubmit}
                setEditingClientId={setEditingClientId}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
