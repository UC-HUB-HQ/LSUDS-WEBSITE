import React from "react";

const AboutMissionCard = ({number, content}) => {
  return (
    <div className="mobile:max-w-80 bg-softBlue rounded-lg px-5 py-7 flex flex-col space-x-2 items-center justify-center">
      <div>
        <i className={`bi bi-${number}-circle-fill text-3xl text-white`}></i>
      </div>
      <p className="text-white text-center">
        {content}
      </p>
    </div>
  );
};

export default AboutMissionCard;
