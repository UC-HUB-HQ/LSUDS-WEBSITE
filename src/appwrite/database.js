import { client, databases } from "./config";
import { ID } from "appwrite";

export const db = {};

const dbId = import.meta.env.VITE_DATABASE_ID;

const collections = [
  {
    dbId,
    id: import.meta.env.VITE_COLLECTION_ID_EVENTS,
    name: "events",
  },
  {
    dbId,
    id: import.meta.env.VITE_COLLECTION_ID_EXECUTIVES,
    name: "executives",
  },
  {
    dbId,
    id: import.meta.env.VITE_COLLECTION_ID_HALL_OF_FAMERS,
    name: "hall0fFamers",
  },
];

collections.forEach((col) => {
  db[col.name] = {
    create: (payload, id = ID.unique()) =>
      databases.createDocument(col.dbId, col.id, id, payload),
    //
    update: (id, payload) =>
      databases.updateDocument(col.dbId, col.id, id, payload),
    //
    delete: (id) => databases.deleteDocument(col.dbId, col.id, id),
    //
    list: (queries = []) => databases.listDocuments(col.dbId, col.id, queries),
    //
    get: (id) => databases.getDocument(col.dbId, col.id, id),
  };
});

//Realtime connection
client.subscribe(`databases.${dbId}.collections.*.documents`, (response) => {
  console.log("Real-time DB event received:", response);

  const event = response.events.find(
    (e) =>
      e.includes(".create") || e.includes(".update") || e.includes(".delete"),
  );

  const doc = response.payload;

  if (event?.includes(".create")) {
    console.log("New document created:", doc);
    // store new data in IndexedDB
  } else if (event?.includes(".update")) {
    console.log("Document updated:", doc);
    //store updated data in IndexedDB
  } else if (event?.includes(".delete")) {
    console.log("Document deleted:", doc);
    // remove document from indexedDB
  }
});
