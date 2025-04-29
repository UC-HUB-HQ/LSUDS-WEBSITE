import React, { useState } from "react";
import { CalendarIcon, FilterIcon, ChevronRightIcon } from "lucide-react";
// Event types for filtering
// type EventType = 'all' | 'debate' | 'workshop' | 'competition';
// Sample event data

const eventsData = [
  {
    id: 1,
    title: "LISTEN 44",
    date: "2025-04-17",
    type: "debate",
    image:
      "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1728&q=80",
    description:
      "Join us for our flagship debate series where participants discuss current social issues and political topics.",
  },
  {
    id: 2,
    title: "LISTEN 2",
    date: "2025-04-03",
    type: "workshop",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description:
      "A workshop focused on improving argumentation skills and logical reasoning for beginners and intermediate debaters.",
  },
  {
    id: 3,
    title: "LISTEN 1",
    date: "2025-04-23",
    type: "competition",
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description:
      "Our annual inter-university debate competition with participants from across Nigeria competing for prestigious awards.",
  },
  {
    id: 4,
    title: "Public Speaking Masterclass",
    date: "2025-05-12",
    type: "workshop",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description:
      "Learn advanced techniques for effective public speaking from industry professionals and experienced debaters.",
  },
  {
    id: 5,
    title: "Mock United Nations",
    date: "2025-05-28",
    type: "competition",
    image:
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
    description:
      "A simulation of United Nations proceedings where participants represent different countries and debate global issues.",
  },
  {
    id: 6,
    title: "Freshman Orientation Debate",
    date: "2025-06-15",
    type: "debate",
    image:
      "https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description:
      "An introductory debate session for new students to learn about the society and experience debate in a friendly environment.",
  },
];

const Events = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredEvents =
    activeFilter === "all"
      ? eventsData
      : eventsData.filter((event) => event.type === activeFilter);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 26, 51, 0.7), rgba(0, 26, 51, 0.7)), url('https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')",
        }}
      >
        <div className="container mx-auto flex h-full flex-col justify-center px-4">
          <h1 className="md:text-5xl mb-4 text-4xl font-bold text-white">
            Our Events
          </h1>
          <p className="mb-8 text-lg text-white">
            Discover upcoming debates, workshops, and competitions
          </p>
        </div>
      </section>
      {/* Events Filter Section */}
      <section className="bg-gray-50 py-12 pagePadding">
        <div className="container mx-auto px-4">
          <div className="md:flex-row mb-8 flex flex-col items-center justify-between">
            <h2 className="md:mb-0 mb-4 text-3xl font-bold text-red-600">
              Coming Up
            </h2>
            <div className="flex items-center">
              <FilterIcon className="mr-2 text-gray-600" size={20} />
              <span className="mr-4">Filter:</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`rounded-md px-4 py-2 ${activeFilter === "all" ? "bg-blue-600 text-white" : "border bg-white text-gray-700"}`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveFilter("debate")}
                  className={`rounded-md px-4 py-2 ${activeFilter === "debate" ? "bg-blue-600 text-white" : "border bg-white text-gray-700"}`}
                >
                  Debates
                </button>
                <button
                  onClick={() => setActiveFilter("workshop")}
                  className={`rounded-md px-4 py-2 ${activeFilter === "workshop" ? "bg-blue-600 text-white" : "border bg-white text-gray-700"}`}
                >
                  Workshops
                </button>
                <button
                  onClick={() => setActiveFilter("competition")}
                  className={`rounded-md px-4 py-2 ${activeFilter === "competition" ? "bg-blue-600 text-white" : "border bg-white text-gray-700"}`}
                >
                  Competitions
                </button>
              </div>
            </div>
          </div>
          {/* Events Grid */}
          <div className="tab:grid-cols-2 grid-cols-3 grid mobile:grid-cols-1 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="overflow-hidden rounded-lg bg-white shadow-md"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center text-gray-500">
                    <CalendarIcon size={16} className="mr-2" />
                    <span>
                      {new Date(event.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
                  <p className="mb-4 text-gray-600">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs capitalize text-blue-600">
                      {event.type}
                    </span>
                    <button className="flex items-center font-medium text-blue-600 hover:text-blue-800">
                      See More
                      <ChevronRightIcon size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredEvents.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-gray-600">
                No events found for this filter. Please try another category.
              </p>
            </div>
          )}
        </div>
      </section>
      {/* Past Events Section */}
      <section className="py-16 pagePadding">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold">Past Events</h2>
          <div className="space-y-8">
            <div className="flex-row flex tab:flex-col overflow-hidden rounded-lg bg-white shadow-md">
              <div className="md:w-1/3 w-full">
                <img
                  src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="National Debate Championship"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:w-2/3 w-full p-6">
                <div className="mb-2 flex items-center text-gray-500">
                  <CalendarIcon size={16} className="mr-2" />
                  <span>February 15, 2025</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  National Debate Championship 2025
                </h3>
                <p className="mb-4 text-gray-600">
                  Our team participated in the National Debate Championship,
                  competing against top universities from across the country.
                  The event featured intense debates on current affairs, policy
                  issues, and philosophical topics.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-600">
                    Competition
                  </span>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-600">
                    2nd Place Winner
                  </span>
                </div>
                <button className="flex items-center font-medium text-blue-600 hover:text-blue-800">
                  View Event Highlights
                  <ChevronRightIcon size={16} className="ml-1" />
                </button>
              </div>
            </div>
            <div className="flex-row flex tab:flex-col overflow-hidden rounded-lg bg-white shadow-md">
              <div className="md:w-1/3 w-full">
                <img
                  src="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Public Speaking Workshop"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:w-2/3 w-full p-6">
                <div className="mb-2 flex items-center text-gray-500">
                  <CalendarIcon size={16} className="mr-2" />
                  <span>January 22, 2025</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  Advanced Public Speaking Workshop
                </h3>
                <p className="mb-4 text-gray-600">
                  We hosted a workshop led by renowned public speaker Dr. Amina
                  Kofi, who shared valuable insights on effective communication,
                  persuasive techniques, and overcoming stage fright.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-600">
                    Workshop
                  </span>
                  <span className="rounded-full bg-purple-100 px-3 py-1 text-xs text-purple-600">
                    100+ Attendees
                  </span>
                </div>
                <button className="flex items-center font-medium text-blue-600 hover:text-blue-800">
                  View Workshop Materials
                  <ChevronRightIcon size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <button className="rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition duration-300 hover:bg-blue-700">
              Load More Past Events
            </button>
          </div>
        </div>
      </section>
      {/* Calendar Section */}
      <section className="bg-gray-50 py-16 pagePadding">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Event Calendar</h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-700">
            Stay updated with our upcoming events and plan your participation in
            advance. Subscribe to our calendar for automatic updates.
          </p>
          <div className="flex justify-center">
            <button className="mr-4 rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition duration-300 hover:bg-blue-700">
              View Full Calendar
            </button>
            <button className="rounded-md border border-blue-600 bg-white px-6 py-3 font-medium text-blue-600 transition duration-300 hover:bg-blue-50">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Events;
