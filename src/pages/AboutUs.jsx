import React from "react";
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
} from "lucide-react";
const AboutUs = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 26, 51, 0.7), rgba(0, 26, 51, 0.7)), url('https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')",
        }}
      >
        <div className="container mx-auto flex h-full flex-col justify-center px-4">
          <h1 className="md:text-5xl mb-4 text-4xl font-bold text-white">
            Where
            <br />
            Ideas Ignite
            <br />
            Minds
          </h1>
          <p className="mb-8 text-lg text-white">Inspire, Debate, Excel.</p>
          <button className="w-fit rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition duration-300 hover:bg-blue-700">
            ABOUT US
          </button>
        </div>
      </section>
      {/* Stats Section */}
      {/* <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-600 text-white p-8 text-center">
              <h3 className="text-4xl font-bold mb-2">32+</h3>
              <p>Awards Won</p>
            </div>
            <div className="bg-blue-600 text-white p-8 text-center">
              <h3 className="text-4xl font-bold mb-2">18+</h3>
              <p>Events Hosted</p>
            </div>
            <div className="bg-blue-600 text-white p-8 text-center">
              <h3 className="text-4xl font-bold mb-2">125+</h3>
              <p>Active Members</p>
            </div>
            <div className="bg-blue-600 text-white p-8 text-center">
              <h3 className="text-4xl font-bold mb-2">2010+</h3>
              <p>Established Since</p>
            </div>
          </div>
        </div>
      </section> */}
      {/* Who are we? Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Who are we?</h2>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-6 text-gray-700">
              The LASU Debate Society is a prestigious student organization
              dedicated to fostering intellectual discourse, critical thinking,
              and public speaking excellence. Founded in 2010, we have grown
              into one of Nigeria's most respected collegiate debate societies.
            </p>
            <p className="text-gray-700">
              We provide a platform for students to develop their oratory
              skills, engage in meaningful discussions about current affairs,
              and participate in competitive debates at national and
              international levels. Our society embraces diversity of thought
              and encourages the expression of varied perspectives in a
              respectful and constructive environment.
            </p>
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="md:flex-row flex flex-col items-center gap-12">
            <div className="md:w-1/2 w-full">
              <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
              <p className="mb-4 text-gray-700">
                Welcome to the Lasu Debate Society. We are dedicated to
                fostering critical thinking, public speaking skills, and
                intellectual growth among students through competitive debate
                and thoughtful discourse.
              </p>
              <p className="mb-6 text-gray-700">
                Our mission is to create a platform where diverse perspectives
                are valued, where students can develop the confidence to
                articulate their ideas clearly, and where the art of persuasive
                communication is celebrated and refined.
              </p>
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-blue-100 p-3">
                  <TrophyIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">Excellence in Debate</h4>
                  <p className="text-sm text-gray-600">
                    Striving for the highest standards
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-blue-100 p-3">
                  <HeartIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">Inclusive Community</h4>
                  <p className="text-sm text-gray-600">
                    Welcoming all voices and perspectives
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Students engaged in debate"
                className="h-auto w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Competitions and Achievements Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Competitions and Achievements
          </h2>
          <div className="md:grid-cols-2 grid grid-cols-1 gap-8">
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
      {/* Executives Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-3xl font-bold">Executives</h2>
          <p className="mb-12 text-center text-gray-700">
            Meet the dedicated individuals who lead our society
          </p>
          <div className="md:grid-cols-2 lg:grid-cols-4 grid grid-cols-1 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80"
                  alt="President"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-blue-600">President</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1634&q=80"
                  alt="Vice President"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Michael Adeyemi</h3>
              <p className="text-blue-600">Vice President</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80"
                  alt="Secretary"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Amina Okafor</h3>
              <p className="text-blue-600">Secretary</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1567784177951-6fa58317e16b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Events Coordinator"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">David Nwachukwu</h3>
              <p className="text-blue-600">Events Coordinator</p>
            </div>
          </div>
        </div>
      </section>
      {/* Committees and Sub-teams Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Committees and Sub-teams
          </h2>
          <div className="md:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-8">
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
      </section>
      {/* Our History Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Our History</h2>
          <div className="md:grid-cols-2 grid grid-cols-1 gap-8">
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-blue-600 p-3 text-white">
                  <CalendarIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Founding (2010)</h3>
              </div>
              <p className="text-gray-700">
                The LASU Debate Society was established by a group of passionate
                students who sought to create a platform for intellectual
                discourse and oratory development on campus.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-blue-600 p-3 text-white">
                  <AwardIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">
                  First Championship (2012)
                </h3>
              </div>
              <p className="text-gray-700">
                Our team won its first national championship, establishing LASU
                as a formidable presence in the collegiate debate circuit and
                setting the stage for future successes.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-blue-600 p-3 text-white">
                  <UserIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">
                  Community Expansion (2018)
                </h3>
              </div>
              <p className="text-gray-700">
                We expanded our reach beyond competitive debate to include
                community workshops, public speaking training, and mentorship
                programs for local high schools.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-blue-600 p-3 text-white">
                  <TrophyIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">
                  International Recognition (2022)
                </h3>
              </div>
              <p className="text-gray-700">
                Our team represented Nigeria at international debate
                competitions, bringing global recognition to our university and
                establishing cross-cultural connections.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Join Our Community</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Become part of a vibrant community dedicated to the art of debate,
            critical thinking, and public speaking excellence.
          </p>
          <button className="rounded-md bg-white px-8 py-3 font-medium text-blue-600 transition duration-300 hover:bg-gray-100">
            Become a Member
          </button>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
