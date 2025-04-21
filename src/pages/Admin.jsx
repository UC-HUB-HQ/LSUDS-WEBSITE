import { useState } from "react";
import EventSection from "../components/AdminComponents/EventSection";
import ExecutivesSection from "../components/AdminComponents/ExecutivesSection";
import HallOfFame from "../components/AdminComponents/HallOfFame";
import { useUser } from "../context/User";
import { Link } from "react-router-dom";

const Admin = () => {
  const { currentUser, logout } = useUser();

  const tabs = [
    { name: "Events", component: <EventSection /> },
    { name: "Executives", component: <ExecutivesSection /> },
    { name: "Hall Of Fame", component: <HallOfFame /> },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <div className="min-h-screen bg-gray-200 pb-2">
      <header className="flex items-center justify-between bg-gray-800 px-10 py-6 shadow-md mobile:px-4">
        <div>
          <h1 className="text-2xl font-bold text-white mobile:text-sm">
            Welcome, {currentUser.name.split(" ")[0]}
          </h1>
        </div>

        <div
          onClick={logout}
          className="flex cursor-pointer items-center gap-2 text-lg text-white hover:text-red-400 mobile:text-sm"
        >
          <i className="bi bi-box-arrow-right"></i>
          <p>Log Out</p>
        </div>
      </header>
      <main className="mx-auto px-10 pt-6 mobile:px-4">
        <nav className="flex gap-10 border-b border-gray-300 pb-0 mobile:justify-between">
          {tabs.map((tab, index) => (
            <div
              onClick={() => setActiveTab(tab.name)}
              key={index}
              className={`${activeTab === tab.name ? "activeAdminSection" : "inActiveAdminSecion"}`}
            >
              {tab.name}
            </div>
          ))}
        </nav>
        <section className="mt-10 rounded-lg bg-white p-6 shadow-md mobile:p-4">
          {tabs.find((tab) => tab.name === activeTab).component}
        </section>
      </main>
    </div>
  );
};

export default Admin;
