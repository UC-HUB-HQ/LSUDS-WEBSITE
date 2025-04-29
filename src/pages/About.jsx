import AboutHeroSection from "../components/AboutHeroSection";
import AboutMissionCard from "../components/AboutMissionCard";
import ExecutiveCard from "../components/ExecutiveCard";
import { db } from "../appwrite/database";
import { Query } from "appwrite";
import { useEffect, useState } from "react";
import ExecutiveCardSkeleton from "../components/ExecutiveCardSkeleton";
import Skeleton from "react-loading-skeleton";
import { UserIcon, TrophyIcon, CalendarIcon, AwardIcon, StarIcon } from "lucide-react";
import CommitteeCard from "../components/CommitteeCard";
import { committees, missionContent } from "../utils/data";

const About = () => {
  const [executives, setExecutives] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
        <h2 className="mb-5 text-center text-3xl font-bold">Who are we?</h2>
        <p className="mb-2 text-gray-700">
          The Lagos State University Debate Society (LSUDS) is the official
          public speaking and leadership society of the Lagos State University.
          Founded with a commitment to fostering articulate thinkers and
          confident leaders, LSUDS has grown into a multi-award-winning platform
          that champions critical thinking, eloquence, and purposeful dialogue.
        </p>
        <p className="text-gray-700">
          Since its inception in 2016, LSUDS has been at the forefront of
          student development—creating a space where diverse voices meet, ideas
          are challenged, and young minds are shaped for impact. From national
          championships to international representations, our legacy is defined
          not just by the trophies we've won, but by the lives we continue to
          transform through speech, debate, and advocacy.
        </p>

        {/* Mission */}
        <h2 className="mb-5 mt-14 text-center text-3xl font-bold">
          Our Mission
        </h2>
        <p className="mb-5 text-center">Our mission is simple but powerful:</p>
        <div className="grid grid-cols-3 gap-2 px-5 tab:grid-cols-2 mobile:grid-cols-1">
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

        {/* Executives */}
        <h2 className="mb-5 mt-14 text-center text-4xl font-bold tab:text-4xl">
          Meet The Team
        </h2>
        <p className="mb-6">
          LSUDS is led by a vibrant team of passionate individuals who embody
          the spirit of service, innovation, and excellence. Our Executive Board
          and supporting committees ensure that the society runs smoothly,
          creatively, and inclusively.
        </p>
        <h2 className="mb-5 text-center text-2xl font-semibold text-red-500 tab:text-center tab:text-2xl">
          LSUDS 8TH Executive Board
        </h2>
        <div className="mb-4 grid grid-cols-3 gap-4 bg-white tab:grid-cols-3 mobile:grid-cols-1">
          {loading
            ? Array(3)
                .fill(0)
                .map((_, index) => <ExecutiveCardSkeleton key={index} />)
            : executives?.map((executive) => {
                return (
                  <ExecutiveCard
                    key={executive.$id}
                    name={executive.name}
                    post={executive.title}
                    image_url={executive.image}
                  />
                );
              })}
        </div>

        {/* Comittees and sub teams */}
        <div className="container mx-auto mt-14 px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Committees and Sub-teams
          </h2>
          <div className="grid grid-cols-2 gap-8 tab:grid-cols-1 mobile:grid-cols-1">
            {committees.map((committee, index) => {
              return (
                <CommitteeCard
                  key={index}
                  name={committee.name}
                  description={committee.description}
                  icon={committee.icon}
                />
              );
            })}
          </div>
        </div>

        {/* Competitions and Achievements Section */}
        <section className=" py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Competitions and Achievements
            </h2>
            {/* Competition Victories */}
            <div className="mb-12">
              <div className="grid-cols-1 grid gap-8">
                <div className="rounded-lg bg-white p-8 shadow-md">
                  <div className="mb-4 flex items-center">
                    <div className="mr-4 rounded-full bg-blue-600 p-3 text-white">
                      <TrophyIcon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold tab:text-left">
                      Competition Victories and Awards
                    </h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start tab:text-left">
                      <span className="mr-2 text-blue-600">•</span>
                      Winner at National Union of Lagos Division Students’ Divisional Representative Council’s Parliamentary Debate, LASU, 2022.
                    </li>
                    <li className="flex items-start tab:text-left">
                      <span className="mr-2 text-blue-600">•</span>
                      Winner National Association of Science Students’ Student Representative Council’s Debate, LASU, 2022.
                    </li>
                    <li className="flex items-start tab:text-left">
                      <span className="mr-2 text-blue-600">•</span>
                      Winner at the Lagos State University Student Union Annual Parliamentary Summit Debate Competition, LASU, 2022.
                    </li>
                    <li className="flex items-start tab:text-left">
                      <span className="mr-2 text-blue-600">•</span>
                      Winner at National Intellectual Property Contest, Ilorin, 2022.
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      Winner at the Global Tax Debate Competition, 2022.
                    </li>
                    <li className="flex items-start tab:text-left">
                      <span className="mr-2 text-blue-600">•</span>
                      Winner, JAW War National 2023
                    </li>
                    <li className="flex items-start tab:text-left">
                      <span className="mr-2 text-blue-600">•</span>
                      Winner, National Tax Debate by Chartered Institute of
                      Taxation (2023)
                    </li>
                    <li className="flex items-start tab:text-left">
                      <span className="mr-2 text-blue-600">•</span>
                      Winner, LASUSU Intervarsity Debate, 2023.
                    </li>
                    <li className="flex items-start tab:text-left">
                      <span className="mr-2 text-blue-600">•</span>
                      Winner, National Energy Law Debate (2023)
                    </li>
                    <li className="flex items-start tab:text-left">
                      <span className="mr-2 text-blue-600">•</span>
                      Winner, Speak Pro'22 National Public Speaking Competition
                    </li>
                    <li className="flex items-start tab:text-left">
                      <span className="mr-2 text-blue-600">•</span>
                      Winner, National Union of Lagos State Student Debate, LASU, 2023.
                    </li>
                    <li className="flex items-start tab:text-left">
                      <span className="mr-2 text-blue-600">•</span>
                      Overall Best Speaker, LASUSU Intervarsity Debate (2023)
                    </li>
                    <li className="flex items-start tab:text-left">
                      <span className="mr-2 text-blue-600">•</span>
                      Overall Best Speaker, National Union of Lagos State
                      Student Debate (2023)
                    </li>
                    <li className="flex items-start tab:text-left">
                      <span className="mr-2 text-blue-600">•</span>
                      Best Debate Award, Sylvia Ogwemoh's Moot and Mock
                      Competition (2022)
                    </li>
                    <li className="flex items-start tab:text-left">
                      <span className="mr-2 text-blue-600">•</span>
                      First Runner Up, Africa Come Alive Conference Debate
                    </li>
                    <li className="flex items-start tab:text-left">
                      <span className="mr-2 text-blue-600">•</span>
                      Winner, LASUSU Intervarsity Debate (2023)
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-white p-8 shadow-md">
                  <div className="mb-4 flex items-center">
                    <div className="mr-4 rounded-full bg-blue-600 p-3 text-white">
                      <StarIcon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold tab:text-left">
                      Notable Achievements
                    </h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start tab:text-left">
                      <span className="mr-2 text-blue-600">•</span>
                      Best Student Impact Event; LISTEN ’19, LISTEN ’21, LISTEN ’22, LISTEN '23, LISTEN ‘V, and LISTEN ‘VI.
                    </li>
                    <li className="flex items-start tab:text-left">
                      <span className="mr-2 text-blue-600">•</span>
                      Organized the First Ever Orators Retreat in LASU
                    </li>
                    <li className="flex items-start tab:text-left">
                      <span className="mr-2 text-blue-600">•</span>
                      Pioneered the First-ever Poetry Slam in LASU history
                    </li>
                    <li className="flex items-start tab:text-left">
                      <span className="mr-2 text-blue-600">•</span>
                      Featured in LASULIFE's Yearbook as one of the most
                      impactful student societies
                    </li>
                    <li className="flex items-start tab:text-left">
                      <span className="mr-2 text-blue-600">•</span>
                      Successful collaboration with LASUSU for the inaugural
                      Word War event
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default About;
