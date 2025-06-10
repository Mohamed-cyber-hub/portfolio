import { useState } from 'react';
import { GraduationCap, Code, Briefcase, Award } from 'lucide-react';

// Mock components - replace with your actual components
const Title = ({ title, des }) => (
  <div className="text-center mb-12">
    <p className="text-sm uppercase tracking-wider mb-2" style={{ color: '#c4cfde' }}>{title}</p>
    <h2 className="text-4xl font-bold relative" style={{ color: '#c4cfde' }}>
      {des}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 rounded-full" style={{ background: '#5B9A8B' }}/>
    </h2>
  </div>
);

const Education = () => (
  <div className="animate-fadeIn">
    <div 
      className="rounded-xl p-8"
      style={{ 
        background: 'linear-gradient(145deg, #1e2024, #23272b)',
        boxShadow: '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e'
      }}
    >
      <h3 className="text-2xl font-semibold mb-6 flex items-center" style={{ color: '#c4cfde' }}>
        <GraduationCap className="mr-3" size={28} style={{ color: '#5B9A8B' }} />
        Educational Background
      </h3>
      <div className="space-y-6">
        <div className="pl-6 pb-6" style={{ borderLeft: '4px solid #5B9A8B' }}>
          <h4 className="text-xl font-semibold" style={{ color: '#c4cfde' }}>Bachelor's Degree</h4>
          <p className="mt-1" style={{ color: '#c4cfde', opacity: 0.8 }}>Computer Science • 2020-2024</p>
          <p className="mt-2" style={{ color: '#c4cfde', opacity: 0.6 }}>University Name • GPA: 3.8/4.0</p>
        </div>
      </div>
    </div>
  </div>
);

const Skills = () => (
  <div className="animate-fadeIn">
    <div 
      className="rounded-xl p-8"
      style={{ 
        background: 'linear-gradient(145deg, #1e2024, #23272b)',
        boxShadow: '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e'
      }}
    >
      <h3 className="text-2xl font-semibold mb-6 flex items-center" style={{ color: '#c4cfde' }}>
        <Code className="mr-3" size={28} style={{ color: '#5B9A8B' }} />
        Frontend Skills
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4" style={{ color: '#c4cfde' }}>Core Technologies</h4>
          <div className="space-y-4">
            {[
              { skill: 'React.js', level: 90 },
              { skill: 'JavaScript (ES6+)', level: 88 },
              { skill: 'TypeScript', level: 82 },
              { skill: 'HTML5', level: 95 }
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium" style={{ color: '#c4cfde' }}>{item.skill}</span>
                  <span className="text-sm" style={{ color: '#c4cfde', opacity: 0.7 }}>{item.level}%</span>
                </div>
                <div className="w-full rounded-full h-3" style={{ backgroundColor: '#1e2024' }}>
                  <div 
                    className="h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${item.level}%`,
                      background: '#5B9A8B'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4" style={{ color: '#c4cfde' }}>Styling & Tools</h4>
          <div className="space-y-4">
            {[
              { skill: 'CSS3 & SCSS', level: 90 },
              { skill: 'Tailwind CSS', level: 85 },
              { skill: 'Bootstrap', level: 80 },
              { skill: 'Responsive Design', level: 92 }
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium" style={{ color: '#c4cfde' }}>{item.skill}</span>
                  <span className="text-sm" style={{ color: '#c4cfde', opacity: 0.7 }}>{item.level}%</span>
                </div>
                <div className="w-full rounded-full h-3" style={{ backgroundColor: '#1e2024' }}>
                  <div 
                    className="h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${item.level}%`,
                      background: '#5B9A8B'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Experience = () => (
  <div className="animate-fadeIn">
    <div 
      className="rounded-xl p-8"
      style={{ 
        background: 'linear-gradient(145deg, #1e2024, #23272b)',
        boxShadow: '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e'
      }}
    >
      <h3 className="text-2xl font-semibold mb-6 flex items-center" style={{ color: '#c4cfde' }}>
        <Briefcase className="mr-3" size={28} style={{ color: '#5B9A8B' }} />
        Work Experience
      </h3>
      <div className="space-y-8">
        <div className="relative pl-8" style={{ borderLeft: '4px solid #5B9A8B' }}>
          <div className="absolute -left-3 top-0 w-6 h-6 rounded-full" style={{ backgroundColor: '#5B9A8B' }}/>
          <div 
            className="rounded-lg p-6"
            style={{ 
              background: 'linear-gradient(145deg, #1e2024, #23272b)',
              boxShadow: 'inset 5px 5px 10px #1c1e22, inset -5px -5px 10px #262a2e'
            }}
          >
            <h4 className="text-xl font-semibold" style={{ color: '#c4cfde' }}>Frontend Developer</h4>
            <p className="font-medium mt-1" style={{ color: '#5B9A8B' }}>MyCompound • 2023</p>
            <p className="mt-3" style={{ color: '#c4cfde' }}>
              Developed responsive web applications using React.js and modern CSS frameworks. 
              Collaborated with cross-functional teams to deliver high-quality user experiences.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['React', 'TypeScript', 'Tailwind CSS', 'Git'].map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 rounded-full text-sm"
                  style={{ 
                    backgroundColor: '#5B9A8B',
                    color: '#fff',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="relative pl-8" style={{ borderLeft: '4px solid #5B9A8B' }}>
          <div className="absolute -left-3 top-0 w-6 h-6 rounded-full" style={{ backgroundColor: '#5B9A8B', }}/>
          <div 
            className="rounded-lg p-6"
            style={{ 
              background: 'linear-gradient(145deg, #1e2024, #23272b)',
              boxShadow: 'inset 5px 5px 10px #1c1e22, inset -5px -5px 10px #262a2e'
            }}
          >
            <h4 className="text-xl font-semibold" style={{ color: '#c4cfde' }}>SEO Team Lead</h4>
            <p className="font-medium mt-1" style={{ color: '#5B9A8B' }}>Egypt United Tours Services • 2023 - 2025 - Present</p>
            <p className="mt-3" style={{ color: '#c4cfde' }}>
              Led the SEO strategy for a leading Egypt travel company, increasing organic traffic by optimizing tour-related content, targeting high-intent keywords, and improving technical SEO. Managed on-page and off-page SEO, coordinated with content writers, and used tools like Google Search Console and GuinRank to boost rankings and conversions.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['GuinRank', 'Ahrefs', 'Semrush', 'WordPress', 'Google Search Console', 'Google Analytics', 'Google AdWords', 'Google Tag Manager'].map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 rounded-full text-sm"
                  style={{ 
                    backgroundColor: '#5B9A8B',
                    color: '#fff',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');

  const tabs = [
    { id: 'education', label: 'Education', icon: GraduationCap, color: 'blue' },
    { id: 'skills', label: 'Professional Skills', icon: Code, color: 'purple' },
    { id: 'experience', label: 'Experience', icon: Briefcase, color: 'green' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'education':
        return <Education />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      default:
        return <Education />;
    }
  };

  return (
    <section id="resume" className="w-full py-20 min-h-screen" style={{ backgroundColor: '#212428' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center text-center">
          <Title title="2+ YEARS OF EXPERIENCE" des="My Resume" />
        </div>
        
        {/* Navigation Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 font-semibold text-sm sm:text-base hover:scale-105"
                  style={{
                    background: isActive 
                      ? 'linear-gradient(145deg, #1e2024, #23272b)'
                      : 'linear-gradient(145deg, #23272b, #1e2024)',
                    boxShadow: isActive
                      ? 'inset 10px 10px 19px #1c1e22, inset -10px -10px 19px #262a2e'
                      : '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',
                    color: isActive ? '#5B9A8B' : '#c4cfde',
                    border: isActive ? '2px solid #5B9A8B' : '2px solid transparent'
                  }}
                  onMouseOver={(e) => {
                    if (!isActive) {
                      e.target.style.color = '#5B9A8B';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isActive) {
                      e.target.style.color = '#c4cfde';
                    }
                  }}
                >
                  <Icon size={20} style={{ color: isActive ? '#5B9A8B' : '#c4cfde' }} />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="transition-all duration-500 ease-in-out">
          {renderContent()}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Resume;