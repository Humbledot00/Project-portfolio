import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail, Github, Linkedin, Code, Camera, MessageSquare, Phone, Calendar, Settings, ChevronLeft, Battery, Wifi, Signal } from 'lucide-react';

export default function SamsungPortfolio() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
  const [date] = useState(new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const apps = [
    { id: 'about', name: 'About Me', icon: User, color: 'from-blue-400 to-blue-600' },
    { id: 'projects', name: 'Projects', icon: Briefcase, color: 'from-purple-400 to-purple-600' },
    { id: 'skills', name: 'Skills', icon: Code, color: 'from-green-400 to-green-600' },
    { id: 'contact', name: 'Contact', icon: Mail, color: 'from-red-400 to-red-600' },
    { id: 'gallery', name: 'Gallery', icon: Camera, color: 'from-pink-400 to-pink-600' },
    { id: 'github', name: 'GitHub', icon: Github, color: 'from-gray-700 to-gray-900' },
  ];

  const projects = [
    { name: 'E-Commerce Platform', tech: 'React, Node.js, MongoDB', desc: 'Full-stack shopping platform with payment integration' },
    { name: 'Task Manager App', tech: 'React Native, Firebase', desc: 'Cross-platform productivity app' },
    { name: 'Weather Dashboard', tech: 'React, OpenWeather API', desc: 'Real-time weather tracking application' },
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code'] },
  ];

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <div className="h-full flex flex-col bg-[#f5f5f5]">
            {/* One UI Home Header with Large Clock */}
            <div className="pt-16 sm:pt-20 pb-6 sm:pb-8 px-6 sm:px-8 bg-gradient-to-b from-white to-[#f5f5f5]">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-800 mb-1">{time}</h1>
              <p className="text-base sm:text-lg font-light text-gray-500">{date}</p>
            </div>

            {/* Apps Grid - One UI Style */}
            <div className="flex-1 px-4 sm:px-6 pb-4 sm:pb-6 overflow-auto">
              <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {apps.map((app) => (
                  <button
                    key={app.id}
                    onClick={() => setCurrentScreen(app.id)}
                    className="flex flex-col items-center gap-1.5 sm:gap-2 active:scale-95 transition-transform"
                  >
                    <div className={`bg-gradient-to-br ${app.color} w-12 h-12 sm:w-14 sm:h-14 rounded-[18px] sm:rounded-[22px] shadow-md flex items-center justify-center`}>
                      <app.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-gray-700 text-center font-medium leading-tight">{app.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* One UI Bottom Navigation */}
            <div className="px-6 sm:px-8 pb-4 sm:pb-6 flex justify-around">
              <button className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-md flex items-center justify-center active:scale-95 transition-transform">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
              </button>
              <button className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-md flex items-center justify-center active:scale-95 transition-transform">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
              </button>
              <button className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1E88E5] shadow-lg flex items-center justify-center active:scale-95 transition-transform">
                <Home className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="h-full bg-white overflow-auto">
            {/* One UI Header Style */}
            <div className="h-32 sm:h-40 bg-gradient-to-br from-blue-400 to-blue-600 relative">
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <button onClick={() => setCurrentScreen('home')} className="mb-3 sm:mb-4 text-white/90 flex items-center gap-1 text-sm sm:text-base">
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" /> Back
                </button>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">About Me</h1>
              </div>
            </div>
            <div className="p-4 sm:p-6 -mt-6 sm:-mt-8">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 mb-3 sm:mb-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-3 sm:mb-4 shadow-md"></div>
                <h2 className="text-xl sm:text-2xl font-bold text-center mb-1 text-gray-800">John Developer</h2>
                <p className="text-gray-500 text-center mb-3 sm:mb-4 text-xs sm:text-sm">Full Stack Developer</p>
              </div>
              <div className="bg-[#f5f5f5] rounded-2xl sm:rounded-3xl p-4 sm:p-6">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Passionate developer with 5+ years of experience building modern web and mobile applications. 
                  I love creating intuitive user experiences and solving complex problems with clean, efficient code.
                </p>
              </div>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="h-full bg-white overflow-auto">
            <div className="h-32 sm:h-40 bg-gradient-to-br from-purple-400 to-purple-600 relative">
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <button onClick={() => setCurrentScreen('home')} className="mb-3 sm:mb-4 text-white/90 flex items-center gap-1 text-sm sm:text-base">
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" /> Back
                </button>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">Projects</h1>
              </div>
            </div>
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 -mt-6 sm:-mt-8">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-gray-100">
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-800">{project.name}</h3>
                  <p className="text-xs sm:text-sm text-purple-600 mb-2 sm:mb-3 font-medium">{project.tech}</p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{project.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="h-full bg-white overflow-auto">
            <div className="h-32 sm:h-40 bg-gradient-to-br from-green-400 to-green-600 relative">
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <button onClick={() => setCurrentScreen('home')} className="mb-3 sm:mb-4 text-white/90 flex items-center gap-1 text-sm sm:text-base">
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" /> Back
                </button>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">Skills</h1>
              </div>
            </div>
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 -mt-6 sm:-mt-8">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-gray-100">
                  <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-gray-800">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span key={i} className="bg-green-50 text-green-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-green-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="h-full bg-white overflow-auto">
            <div className="h-32 sm:h-40 bg-gradient-to-br from-red-400 to-red-600 relative">
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <button onClick={() => setCurrentScreen('home')} className="mb-3 sm:mb-4 text-white/90 flex items-center gap-1 text-sm sm:text-base">
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" /> Back
                </button>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">Contact</h1>
              </div>
            </div>
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 -mt-6 sm:-mt-8">
              <a href="mailto:john@example.com" className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 active:scale-98 transition-transform">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-50 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">Email</p>
                  <p className="text-xs sm:text-sm text-gray-500 truncate">john@example.com</p>
                </div>
              </a>
              <a href="https://linkedin.com" className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 active:scale-98 transition-transform">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">LinkedIn</p>
                  <p className="text-xs sm:text-sm text-gray-500 truncate">linkedin.com/in/johndeveloper</p>
                </div>
              </a>
              <a href="https://github.com" className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 active:scale-98 transition-transform">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">GitHub</p>
                  <p className="text-xs sm:text-sm text-gray-500 truncate">github.com/johndeveloper</p>
                </div>
              </a>
            </div>
          </div>
        );

      case 'gallery':
        return (
          <div className="h-full bg-white overflow-auto">
            <div className="h-32 sm:h-40 bg-gradient-to-br from-pink-400 to-pink-600 relative flex-shrink-0">
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <button onClick={() => setCurrentScreen('home')} className="mb-3 sm:mb-4 text-white/90 flex items-center gap-1 text-sm sm:text-base">
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" /> Back
                </button>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">Gallery</h1>
              </div>
            </div>
            <div className="p-4 sm:p-6 pb-8 sm:pb-12">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 -mt-6 sm:-mt-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square bg-gradient-to-br from-pink-200 to-purple-300 rounded-2xl sm:rounded-3xl shadow-lg"></div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'github':
        return (
          <div className="h-full bg-white overflow-auto">
            <div className="h-32 sm:h-40 bg-gradient-to-br from-gray-700 to-gray-900 relative flex-shrink-0">
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <button onClick={() => setCurrentScreen('home')} className="mb-3 sm:mb-4 text-white/90 flex items-center gap-1 text-sm sm:text-base">
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" /> Back
                </button>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">GitHub Stats</h1>
              </div>
            </div>
            <div className="p-4 sm:p-6 pb-8 sm:pb-12">
              <div className="space-y-3 sm:space-y-4 -mt-6 sm:-mt-8">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-gray-100">
                  <p className="text-3xl sm:text-4xl font-bold text-gray-800 mb-1">156</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Repositories</p>
                </div>
                <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-gray-100">
                  <p className="text-3xl sm:text-4xl font-bold text-gray-800 mb-1">2.4K</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Contributions</p>
                </div>
                <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-gray-100">
                  <p className="text-3xl sm:text-4xl font-bold text-gray-800 mb-1">342</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Followers</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-2 sm:p-4">
      <div className="relative w-full max-w-[380px] sm:max-w-sm">
        <div className="bg-black rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl">
          <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative">
            {/* One UI Status Bar */}
            <div className="absolute top-0 left-0 right-0 z-50 px-6 sm:px-8 py-2 sm:py-3 flex justify-between items-center">
              <span className="text-gray-900 text-xs sm:text-sm font-semibold">{time}</span>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Signal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-900" />
                <Wifi className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-900" />
                <Battery className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-900" />
              </div>
            </div>

            {/* Camera Punch Hole */}
            <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-black rounded-full z-50 shadow-inner"></div>

            <div className="w-full aspect-[9/19.5] relative bg-white">
              {renderScreen()}
            </div>
          </div>
        </div>

        {/* Phone Buttons */}
        <div className="absolute right-0 top-28 sm:top-32 w-0.5 sm:w-1 h-12 sm:h-16 bg-gray-700 rounded-l"></div>
        <div className="absolute left-0 top-28 sm:top-32 w-0.5 sm:w-1 h-10 sm:h-12 bg-gray-700 rounded-r"></div>
        <div className="absolute left-0 top-40 sm:top-48 w-0.5 sm:w-1 h-10 sm:h-12 bg-gray-700 rounded-r"></div>
      </div>
    </div>
  );
}