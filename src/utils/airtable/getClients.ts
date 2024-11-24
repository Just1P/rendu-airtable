import connectAirtable from "./connect";
import { Client, Clients } from "../types/client";

const getClients = (
  setClients: React.Dispatch<React.SetStateAction<Clients>>
) => {
  const base = connectAirtable();
  const TABLE_NAME = "Rendu";
  const table = base(TABLE_NAME);

  table
    .select({
      view: "Grid view",
    })
    .eachPage(
      (records, fetchNextPage) => {
        console.log("Records fetched:", records);
        for (const record of records) {
          setClients((prevClients) => {
            const exists = prevClients.some(
              (client) => client.id === record.id
            );
            if (exists) return prevClients;

            return [
              ...prevClients,
              {
                id: record.id,
                ...record.fields,
              } as Client,
            ];
          });
        }
        fetchNextPage();
      },
      (err) => {
        if (err) {
          console.error("Error fetching clients from Airtable:", err);
        }
      }
    );
};

export default getClients;
