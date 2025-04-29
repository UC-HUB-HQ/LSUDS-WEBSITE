import React, { useState } from 'react';
import { AwardIcon, StarIcon, TrophyIcon, FilterIcon, QuoteIcon } from 'lucide-react';
// type AchievementCategory = 'all' | 'debate' | 'leadership' | 'service';

const hallOfFamers = [{
  id: 1,
  name: 'Dr. Oluwaseun Adebayo',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80',
  inductionYear: 2018,
  category: 'debate',
  title: 'International Debate Champion',
  achievements: ['World Universities Debating Championship Finalist 2017', 'Pan-African Debate Champion 2016', 'Best Speaker Award at National Finals 2015'],
  quote: 'Debate taught me that the pursuit of truth requires both conviction and humility.',
  currentRole: 'Professor of International Relations, Oxford University'
}, {
  id: 2,
  name: 'Chidinma Okonkwo',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80',
  inductionYear: 2019,
  category: 'leadership',
  title: 'Former Society President',
  achievements: ['Led LASU to 3 consecutive national championships', 'Established the Annual Debate Workshop Series', 'Created mentorship program for new debaters'],
  quote: 'Leadership in debate is about creating platforms for others to shine.',
  currentRole: 'UN Youth Ambassador'
}, {
  id: 3,
  name: 'Ibrahim Hassan',
  image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1634&q=80',
  inductionYear: 2020,
  category: 'service',
  title: 'Community Impact Leader',
  achievements: ['Founded Debate for Schools Initiative', 'Trained over 1000 high school students', 'Developed Debate Curriculum for Schools'],
  quote: 'The true value of debate lies in its power to transform communities.',
  currentRole: 'Education Policy Consultant'
}, {
  id: 4,
  name: 'Dr. Aisha Mohammed',
  image: 'https://images.unsplash.com/photo-1567784177951-6fa58317e16b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
  inductionYear: 2021,
  category: 'debate',
  title: 'Distinguished Debate Coach',
  achievements: ['Coach of World Championship Team 2019', 'Published Author on Debate Theory', 'International Debate Judge'],
  quote: "Excellence in debate is not just about winning, it's about continuous growth.",
  currentRole: 'Director of Forensics, Harvard University'
}];

const HallOfFamers = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const filteredHallOfFamers = activeCategory === 'all' ? hallOfFamers : hallOfFamers.filter(member => member.category === activeCategory);
  return <div className="bg-white w-full">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[400px]" style={{
      backgroundImage: "linear-gradient(rgba(0, 26, 51, 0.8), rgba(0, 26, 51, 0.8)), url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')"
    }}>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Hall of Fame
          </h1>
          <p className="text-white text-lg mb-8">
            Celebrating Excellence in Debate and Leadership
          </p>
        </div>
      </section>
      {/* Filter Section */}
      <section className="py-12 bg-gray-50 pagePadding">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-red-600 mb-4 md:mb-0">
              Distinguished Members
            </h2>
            <div className="flex items-center">
              <FilterIcon className="text-gray-600 mr-2" size={20} />
              <span className="mr-4">Filter by Category:</span>
              <div className="flex space-x-2">
                <button onClick={() => setActiveCategory('all')} className={`px-4 py-2 rounded-md ${activeCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border'}`}>
                  All
                </button>
                <button onClick={() => setActiveCategory('debate')} className={`px-4 py-2 rounded-md ${activeCategory === 'debate' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border'}`}>
                  Debate
                </button>
                <button onClick={() => setActiveCategory('leadership')} className={`px-4 py-2 rounded-md ${activeCategory === 'leadership' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border'}`}>
                  Leadership
                </button>
                <button onClick={() => setActiveCategory('service')} className={`px-4 py-2 rounded-md ${activeCategory === 'service' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border'}`}>
                  Service
                </button>
              </div>
            </div>
          </div>
          {/* Hall of Famers Grid */}
          <div className="grid tab:grid-cols-1 grid-cols-2 gap-8">
            {filteredHallOfFamers.map(member => <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex flex-col">
                  <div className="h-64 w-full">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                        Inducted {member.inductionYear}
                      </span>
                    </div>
                    <p className="text-blue-600 font-medium mb-4">
                      {member.title}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2 flex items-center">
                        <StarIcon className="w-5 h-5 text-blue-600 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                        {member.achievements.map((achievement, index) => <li key={index}>{achievement}</li>)}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-start">
                        <QuoteIcon className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                        <p className="text-gray-600 italic">{member.quote}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">
                      Currently: {member.currentRole}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Legacy Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Their Legacy Lives On</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrophyIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Championship Victories</h3>
              <p className="text-gray-700">
                Our hall of famers have led teams to multiple national and
                international victories.
              </p>
            </div>
            <div className="p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation in Debate</h3>
              <p className="text-gray-700">
                They've pioneered new debate formats and training methodologies.
              </p>
            </div>
            <div className="p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AwardIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Impact</h3>
              <p className="text-gray-700">
                Their initiatives continue to inspire and educate new
                generations of debaters.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Their Ranks</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            The path to excellence begins with a single step. Join LASU Debate
            Society and write your own legacy.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-300">
            Start Your Journey
          </button>
        </div>
      </section>
    </div>;
};
export default HallOfFamers;