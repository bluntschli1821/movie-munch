const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;

export const updateSearchCount = async () => {
  console.log(
    "Database ID:" + DATABASE_ID,
    "Collection ID:" + COLLECTION_ID,
    "Project ID:" + PROJECT_ID
  );
};
