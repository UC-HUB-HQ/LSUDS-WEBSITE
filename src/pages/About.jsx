import AboutHeroSection from "../components/AboutHeroSection";
import AboutMissionCard from "../components/AboutMissionCard";

const About = () => {
  const missionContent = [
    {
      number: 1,
      text: "To empower students with the tools of communication, critical thought, and leadership.",
    },
    {
      number: 2,
      text: "To foster a culture of respectful discourse, personal development, and social responsibility.",
    },
    {
      number: 3,
      text: "To raise a generation of thinkers who lead, not just with words, but with values.",
    },
  ];

  return (
    <section>
      <AboutHeroSection />
      <section className="mb-4 flex flex-col px-32 pt-14">
        <h2 className="mb-5 text-left text-4xl font-semibold">WHO ARE WE?</h2>
        <p className="mb-5 text-xl">
          The Lagos State University Debate Society (LSUDS) is the official
          public speaking and leadership society of the Lagos State University.
          Founded with a commitment to fostering articulate thinkers and
          confident leaders, LSUDS has grown into a multi-award-winning platform
          that champions critical thinking, eloquence, and purposeful dialogue.
          Since its inception in 2016, LSUDS has been at the forefront of
          student development—creating a space where diverse voices meet, ideas
          are challenged, and young minds are shaped for impact. From national
          championships to international representations, our legacy is defined
          not just by the trophies we've won, but by the lives we continue to
          transform through speech, debate, and advocacy.
        </p>

        <h2 className="mb-5 text-left text-4xl font-semibold">OUR MISSION</h2>
        <p className="mb-5 text-xl">Our mission is simple but powerful:</p>
        <div className="flex w-full flex-row items-center tab:flex-col">
          {missionContent.map((mission) => {
            return (
              <AboutMissionCard
                key={mission.number}
                number={mission.number}
                content={mission.text}
              />
            );
          })}
        </div>

        <h2 className="mb-5 mt-20 text-center text-[3.5em] font-semibold">
          MEET THE TEAM
        </h2>
        <p className="mb-5 text-xl">
          LSUDS is led by a vibrant team of passionate individuals who embody
          the spirit of service, innovation, and excellence. Our Executive Board
          and supporting committees ensure that the society runs smoothly,
          creatively, and inclusively.
        </p>
        <h2 className="mb-5 text-left text-3xl font-semibold">LSUDS 8TH EXECUTIVE BOARD</h2>
      </section>
    </section>
  );
};

export default About;
