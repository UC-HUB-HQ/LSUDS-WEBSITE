import React from "react";

const CommitteeCard = ({ name, description, icon}) => {
  return (
    <div className="rounded-lg bg-white p-8 shadow-md">
      <div className="mb-4 flex flex-row tab:flex-col items-center">
        <div className="mr-4 rounded-full bg-blue-100 p-3">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
      <p className="text-gray-700">
        {description}
      </p>
    </div>
  );
};

export default CommitteeCard;
