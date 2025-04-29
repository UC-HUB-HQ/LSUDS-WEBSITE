import AboutHeroSection from "../components/AboutHeroSection";
import AboutMissionCard from "../components/AboutMissionCard";
import ExecutiveCard from "../components/ExecutiveCard";
import { db } from "../appwrite/database";
import { Query } from "appwrite";
import { useEffect, useState } from "react";
import ExecutiveCardSkeleton from "../components/ExecutiveCardSkeleton";
import Skeleton from "react-loading-skeleton";
import {
  UserIcon,
  TrophyIcon,
  CalendarIcon,
  HeartIcon,
  AwardIcon,
  UsersIcon,
  TargetIcon,
  BrainIcon,
  PenToolIcon,
  GavelIcon,
  BookOpenCheckIcon,
  MicVocal,
  ShieldCheckIcon,
  PenSquareIcon,
  MegaphoneIcon,
  HeartHandshakeIcon,
  WalletIcon,
} from "lucide-react";

const committees = [
  {
    name: "Training Committee",
    description: `The heartbeat of our growth.
This committee is led by the President and is responsible for structuring training sessions for members and trainees, curating debate topics, and mentoring members for competitions. They build speakers from the ground up—one argument at a time.

The training committee consists of the President, a Secretary and two members. 
`,
    icon: <TargetIcon />,
  },
  {
    name: "Change of Guard Committee",
    description: `The architects of transition.
This committee is tasked with planning and executing the society’s annual Change of Guard ceremony, this committee ensures leadership transition is smooth, memorable, and reflective of LSUDS’ values.
`,
    icon: <GavelIcon />,
  },
  {
    name: "LISTEN Committee",
    description: `The storytellers’ circle.
This committee is led by the Director of Organising and Welfare. Responsible for organising LISTEN—the society’s flagship storytelling event and the biggest storytelling event in Africa. This committee curates stories that inspire, empower, and reveal the journeys behind the voices we admire. 
`,
    icon: <BookOpenCheckIcon />,
  },
  {
    name: "Wordwar Committee",
    description: `Where competition meets creativity.
The WordWar Committee is in charge of planning and executing WordWar—LSUDS’ biggest debate competition in LASU that brings out the fire in our speakers and students in LASU. From motion crafting to event coordination, they ensure that every round is intense, impactful, and unforgettable. They turn friendly rivalry into a platform for growth and brilliance.
`,
    icon: <MicVocal />,
  },
  {
    name: "Intra-LSUDS and Oratory Contest Committee",
    description: `Building brilliance from within.
This committee handles LSUDS internal competitions(Intra-LSUDS and Oratory Contest), and community engagement activities within the society. They create platforms that help members test their growth, sharpen their skills, and bond through healthy rivalry and collaboration.

Tasked with organising LSUDS’ signature speech-based contests, this committee curates powerful themes and provides a stage for members to showcase their oratory excellence. They don’t just plan events—they create moments that echo long after the mic drops.
`,
    icon: <MicVocal />,
  },
  {
    name: "Independent Electoral Board",
    description: `The custodians of credibility.
The IEB is an autonomous body within LSUDS, responsible for conducting free, fair, and transparent elections during leadership transitions. Tasked with setting guidelines, moderating campaigns, and overseeing voting processes, the Board ensures that the society's democratic values are upheld with integrity and order. They protect the voice of the members—literally.
`,
    icon: <ShieldCheckIcon />,
  },
  {
    name: "Editorial Board",
    description: `Our words, our legacy.
The Editorial Board handles all written content within the society—from blogs to official publications. They shape the voice of LSUDS with clarity, creativity, and intention. 

Led by: The Head of the Editorial Board who is also the Chief Editor. 
`,
    icon: <PenSquareIcon />,
  },
  {
    name: "Public Relations (PR) Team",
    description: `The megaphone of the society.
The PR Team manages our presence across digital platforms and media channels, ensuring our achievements, events, and values are communicated with flair and professionalism. 

Led by: The PR Expert.
`,
    icon: <MegaphoneIcon />,
  },
  {
    name: "Welfare Team",
    description: `The love in our logistics.
This team is all about people. They check in, show up, and support members through wins, lows, and everything in between—creating a culture of care within the society. Additionally, from coordinating transport and feeding to handling on-ground arrangements during events, this team ensures that every LSUDS activity runs smoothly and members are well catered for.

Led by: The Director of Organising and Welfare. 
`,
    icon: <HeartHandshakeIcon />,
  },
  {
    name: "Finance Team",
    description: `The guardians of the gold.
Responsible for financial planning, budgeting, and tracking expenses, this team ensures that the society remains financially healthy and transparent. 

Led by: The Financial Secretary.
`,
    icon: <WalletIcon />,
  },
  {
    name: "Research Team",
    description: `Brains behind the brilliance.
They dig, study, and present insights that help our speakers stay ahead of the curve. From motions to global issues, the Research Team keeps us informed and intellectually ready. 

Led by: The Vice President. 
`,
    icon: <BrainIcon />,
  },
];

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
        <h2 className="mb-5 text-center text-3xl font-bold">Who are we?</h2>
        <p className="mb-2 text-gray-700">
          The Lagos State University Debate Society (LSUDS) is the official
          public speaking and leadership society of the Lagos State University.
          Founded with a commitment to fostering articulate thinkers and
          confident leaders, LSUDS has grown into a multi-award-winning platform
          that champions critical thinking, eloquence, and purposeful dialogue.
        </p>
        <p className="mb-2 text-gray-700">
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
        <div className="mb-4 grid grid-cols-3 gap-4 bg-white tab:grid-cols-2 mobile:grid-cols-1">
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
          <div className="grid grid-cols-2 gap-8 mobile:grid-cols-1">

            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-blue-100 p-3">
                  <BrainIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Research Committee</h3>
              </div>
              <p className="text-gray-700">
                Dedicated to gathering and analyzing information for debate
                topics, preparing comprehensive briefs, and maintaining our
                research database.
              </p>
            </div>
            
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-blue-100 p-3">
                  <TargetIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Training Team</h3>
              </div>
              <p className="text-gray-700">
                Focuses on developing training programs, organizing workshops,
                and mentoring new members to enhance their debate skills.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-blue-100 p-3">
                  <UsersIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Outreach Committee</h3>
              </div>
              <p className="text-gray-700">
                Manages community engagement, school partnerships, and public
                relations to expand our society's impact and reach.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-blue-100 p-3">
                  <CalendarIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Events Team</h3>
              </div>
              <p className="text-gray-700">
                Plans and executes debates, competitions, workshops, and social
                events throughout the academic year.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-blue-100 p-3">
                  <PenToolIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Creative Team</h3>
              </div>
              <p className="text-gray-700">
                Handles design, content creation, social media management, and
                documentation of society activities.
              </p>
            </div>
          </div>
        </div>

        {/* Competitions and achievements */}
        <div className="container mx-auto px-4 pt-14">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Competitions and Achievements
          </h2>
          <div className="grid grid-cols-2 gap-8 tab:grid-cols-1">
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-blue-600 p-3 text-white">
                  <TrophyIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">National Champions</h3>
              </div>
              <p className="text-gray-700">
                Three-time winners of the National Collegiate Debate
                Championship (2018, 2020, 2022), showcasing consistent
                excellence in competitive debate.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-blue-600 p-3 text-white">
                  <AwardIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">
                  International Recognition
                </h3>
              </div>
              <p className="text-gray-700">
                Represented Africa at the World Universities Debating
                Championship, reaching the quarterfinals and earning distinction
                for outstanding performance.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-blue-600 p-3 text-white">
                  <UserIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Best Speaker Awards</h3>
              </div>
              <p className="text-gray-700">
                Our members have consistently earned Best Speaker awards at
                major tournaments, including the Pan-African Debate
                Championship.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-blue-600 p-3 text-white">
                  <CalendarIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Hosting Excellence</h3>
              </div>
              <p className="text-gray-700">
                Successfully hosted the West African Collegiate Debate
                Tournament in 2023, bringing together over 200 participants from
                15 countries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
