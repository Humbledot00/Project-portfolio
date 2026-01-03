import React from 'react';
import RGL from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { User, Briefcase, Code, Mail, Camera, Github } from 'lucide-react'; // example icons
import Widgets from './Widgets'; // your Samsung-style icon component

const apps = [
  { id: 'about', name: 'About Me', icon: User, color: 'from-blue-400 to-blue-600' },
  { id: 'projects', name: 'Projects', icon: Briefcase, color: 'from-purple-400 to-purple-600' },
  { id: 'skills', name: 'Skills', icon: Code, color: 'from-green-400 to-green-600' },
  { id: 'contact', name: 'Contact', icon: Mail, color: 'from-red-400 to-red-600' },
  { id: 'gallery', name: 'Gallery', icon: Camera, color: 'from-pink-400 to-pink-600' },
  { id: 'github', name: 'GitHub', icon: Github, color: 'from-gray-700 to-gray-900' },
];

// Generate a layout for react-grid-layout
const layout = apps.map((app, index) => ({
  i: app.id,
  x: index % 4,       // column: 0,1,2,3
  y: Math.floor(index / 4), // row: 0,1,...
  w: 1,               // width in grid units
  h: 1,               // height in grid units
}));

const AppsGrid = () => {
  return (
    <div className="px-4 sm:px-6 pb-4 sm:pb-6 overflow-auto">
      <RGL
        className="layout"
        layout={layout}
        cols={4}           // 4 columns like One UI
        rowHeight={50}    // height of each row (adjust to match your icon)
        width={50}        // width of the grid container
        isDraggable={true} // allow dragging
        isResizable={true} // allow resizing
      >
        {apps.map((app) => (
          <div key={app.id} className="flex justify-center items-center">
            <Widgets icon={app.icon} label={app.name} appColor={app.color} />
          </div>
        ))}
      </RGL>
    </div>
  );
};

export default AppsGrid;
