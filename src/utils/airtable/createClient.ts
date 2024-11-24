import { ClientDto, Status, Clients, Client } from "../types/client";
import connectAirtable from "./connect";

const createClient = (
  clientDto: ClientDto,
  setClients: React.Dispatch<React.SetStateAction<Clients>>
) => {
  const base = connectAirtable();
  const TABLE_NAME = "Rendu";
  const table = base(TABLE_NAME);

  const newClient = {
    fields: {
      ...clientDto,
      status: Status.NOT_CONTACTED,
    },
  };

  table.create([newClient], (err, records) => {
    if (err) {
      console.error("Erreur lors de la création du client :", err);
      return;
    }

    if (!records) {
      return;
    }

    for (const record of records) {
      setClients((previousClients) => [
        ...previousClients,
        {
          id: record.id,
          ...record.fields,
        } as Client,
      ]);
    }

    console.log("Client créé et email envoyé via Airtable Automations");
  });
};

export default createClient;