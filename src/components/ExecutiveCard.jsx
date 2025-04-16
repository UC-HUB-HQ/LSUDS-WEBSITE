const ExecutiveCard = ({ name, post, image_url }) => {
  return (
    <div className="tab:max-w-80 max-w-xs flex flex-col items-start rounded-lg bg-gray-50 p-4 shadow-md">
      <div className="w-full">
        <img
          src={`https://cloud.appwrite.io/v1/storage/buckets/${import.meta.env.VITE_BUCKET_ID}/files/${image_url}/view?project=${import.meta.env.VITE_PROJECT_ID}`}
          alt="image"
          className="aspect-square h-auto w-full rounded-lg object-cover"
        />
      </div>
      <div className="mb-3 mt-4">
        <h1 className="md:text-2xl text-xl font-semibold">{name}</h1>
        <p className="md:text-base text-sm">{post}</p>
      </div>
    </div>
  );
};

export default ExecutiveCard;
