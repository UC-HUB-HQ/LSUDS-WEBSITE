import React from "react";

const AboutMissionCard = ({number, content}) => {
  return (
    <div className="bg-softBlue border-2 rounded-lg px-5 py-7 flex flex-col gap-2 items-center justify-center">
      <div>
        <i className={`bi bi-${number}-circle-fill text-3xl text-white`}></i>
      </div>
      <p className="text-white">
        {content}
      </p>
    </div>
  );
};

export default AboutMissionCard;
