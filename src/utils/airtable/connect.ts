import Airtable from "airtable";

const connectAirtable = () => {
  if (!import.meta.env.VITE_APP_AIRTABLE_API_TOKEN) {
    throw new Error("VITE_APP_AIRTABLE_API_TOKEN is not set in .env file");
  }

  Airtable.configure({
    apiKey: import.meta.env.VITE_APP_AIRTABLE_API_TOKEN,
  });

  if (!import.meta.env.VITE_APP_AIRTABLE_BASE_ID) {
    throw new Error("VITE_APP_AIRTABLE_BASE_ID is not set in .env file");
  }

  const base = Airtable.base(import.meta.env.VITE_APP_AIRTABLE_BASE_ID);

  console.log("Connected to Airtable successfully!");

  return base;
};

export default connectAirtable;
