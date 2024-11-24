import { Client } from "../../utils/types/client";
import Chip from "../Chip/Chip";
import Button from "./Button";

const ClientRow = ({
  client,
  isEditing,
  editData,
  handleEditChange,
  handleEditSubmit,
  setEditingClientId,
  handleDelete,
}: {
  client: Client;
  isEditing: boolean;
  editData: Partial<Pick<Client, "notes" | "status">>;
  handleEditChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handleEditSubmit: (id: string) => Promise<void>;
  setEditingClientId: (id: string | null) => void;
  handleDelete: (id: string) => Promise<void>;
}) => (
  <tr key={client.id} className="border-t border-gray-600 hover:bg-gray-600">
    <td className="px-4 py-2">{client.firstname}</td>
    <td className="px-4 py-2">{client.lastname}</td>
    <td className="px-4 py-2">{client.email}</td>
    <td className="px-4 py-2">{client.phoneNumber}</td>
    <td className="px-4 py-2">
      {isEditing ? (
        <textarea
          name="notes"
          value={editData.notes}
          onChange={handleEditChange}
          className="w-full bg-gray-700 text-white rounded p-2 resize-none h-10"
        />
      ) : (
        client.notes
      )}
    </td>
    <td className="px-4 py-2">
      {isEditing ? (
        <select
          name="status"
          value={editData.status}
          onChange={handleEditChange}
          className="w-full bg-gray-700 text-white rounded p-2"
        >
          <option value="Not contacted">Not contacted</option>
          <option value="Contacted">Contacted</option>
          <option value="Contact in future">Contact in future</option>
        </select>
      ) : (
        <Chip status={client.status} />
      )}
    </td>
    <td className="px-4 py-2 space-x-2">
      {isEditing ? (
        <>
          <Button onClick={() => handleEditSubmit(client.id)} color="purple">
            Save
          </Button>
          <Button onClick={() => setEditingClientId(null)} color="gray">
            Cancel
          </Button>
        </>
      ) : (
        <>
          <Button onClick={() => setEditingClientId(client.id)} color="blue">
            Edit
          </Button>
          <Button onClick={() => handleDelete(client.id)} color="red">
            Delete
          </Button>
        </>
      )}
    </td>
  </tr>
);

export default ClientRow;
