import connectAirtable from "./connect";
import { Client } from "../types/client";

const updateClient = async (
  id: string,
  updates: Partial<Pick<Client, "notes" | "status">>
): Promise<Client | null> => {
  const base = connectAirtable();
  const TABLE_NAME = "Rendu";

  try {
    console.log("Sending updates to Airtable:", { id, fields: updates });
    const [record] = await base(TABLE_NAME).update([
      {
        id,
        fields: updates,
      },
    ]);

    return {
      id: record.id,
      firstname: record.get("firstname") as string,
      lastname: record.get("lastname") as string,
      email: record.get("email") as string,
      phoneNumber: record.get("phoneNumber") as string,
      notes: record.get("notes") as string,
      status: record.get("status") as
        | "Not contacted"
        | "Contacted"
        | "Contact in future",
    };
  } catch (error) {
    console.error("Erreur lors de la mise à jour du client :", error);
    return null;
  }
};

export default updateClient;
