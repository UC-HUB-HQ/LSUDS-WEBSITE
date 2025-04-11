import Dexie from "dexie";

export const cacheDb = new Dexie("lsuds_db");

cacheDb.version(1).stores({
  events: "$id, title, description, date, image",
  hallOfFame: "$id, name, bio, image",
  executives: "$id, name, title, image",
});

export const transformEvent = (data) => {
  return {
    $id: data.$id,
    title: data.title,
    description: data.description,
    date: data.date,
    image: data.image,
  };
}

export const transformHallOfFame = (data) => {
  return {
    $id: data.$id,
    name: data.name,
    bio: data.bio,
    image: data.image,
  };
};

export const transformExecutives = (data) => {
  return {
    $id: data.$id,
    name: data.name,
    title: data.title,
    image: data.image,
  };
};





