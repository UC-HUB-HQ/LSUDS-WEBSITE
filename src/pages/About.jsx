import AboutHeroSection from "../components/AboutHeroSection";
import AboutMissionCard from "../components/AboutMissionCard";
import ExecutiveCard from "../components/ExecutiveCard";
import { db } from "../appwrite/database";
import { Query } from "appwrite";
import { useEffect, useState } from "react";
import ExecutiveCardSkeleton from "../components/ExecutiveCardSkeleton";
import Skeleton from "react-loading-skeleton";

const About = () => {
  const [executives, setExecutives] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  const getExecutives = async () => {
    const executiveResponse = await db.executives.list([
      Query.orderDesc("$updatedAt"),
    ]);

    let executivesArray = executiveResponse.documents.reverse();
    setExecutives(executivesArray);
  };

  useEffect(() => {
    try {
      setLoading(true);
      getExecutives();
    } catch (error) {
      setError("Error fetching Executives");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <section>
      <AboutHeroSection />
      <section className="pagePadding container mb-4 flex flex-col pt-14 tab:items-center tab:text-center">
        <h2 className="mb-5 text-left text-4xl font-semibold">WHO ARE WE?</h2>
        <p className="mb-5 text-lg">
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
        <p className="mb-5 text-lg">Our mission is simple but powerful:</p>
        <div className="flex flex-row items-center justify-between tab:justify-start px-5 gap-2 tab:flex-col">
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

        <h2 className="text-red-500 mb-5 mt-20 text-center text-[3.0em] tab:text-4xl font-semibold">
          MEET THE TEAM
        </h2>
        <p className="mb-12 text-lg">
          LSUDS is led by a vibrant team of passionate individuals who embody
          the spirit of service, innovation, and excellence. Our Executive Board
          and supporting committees ensure that the society runs smoothly,
          creatively, and inclusively.
        </p>
        <h2 className="mb-5 text-center text-3xl tab:text-2xl font-semibold tab:text-center">
          LSUDS 8TH EXECUTIVE BOARD
        </h2>
        <div className="bg-white mb-4 flex flex-row flex-wrap items-start justify-between tab:justify-center px-5 gap-5">
          {loading ? (
            Array(3).fill(0).map((_, index) => <ExecutiveCardSkeleton key={index} />)
          ) : (
            executives?.map((executive) => {
              return (
                <ExecutiveCard
                  key={executive.$id}
                  name={executive.name}
                  post={executive.title}
                  image_url={executive.image}
                />
              );
            })
          )}
        </div>
      </section>
    </section>
  );
};

export default About;
