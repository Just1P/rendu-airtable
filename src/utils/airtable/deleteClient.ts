import connectAirtable from "./connect";

const deleteClient = async (id: string): Promise<boolean> => {
  const base = connectAirtable();
  const TABLE_NAME = "Rendu";

  try {
    await base(TABLE_NAME).destroy([id]);
    return true;
  } catch (error) {
    console.error("Erreur lors de la suppression du client :", error);
    return false;
  }
};

export default deleteClient;
