import { useState, useEffect } from "react";
import { Camera, FileText, Phone, Settings } from "lucide-react";

export default function MobileWidgets() {
  const [isMobile, setIsMobile] = useState(false);

  // Check viewport size
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!isMobile) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-gray-100 text-gray-700 text-center">
        <div className="bg-white shadow-md rounded-xl px-6 py-4 border border-gray-200">
          <p className="text-lg font-semibold">⚠️ Not available</p>
          <p className="text-sm text-gray-500 mt-1">
            This interface is only visible on mobile screens.
          </p>
        </div>
      </div>
    );
  }

  const widgets = [
    { icon: <Camera size={28} />, label: "Camera" },
    { icon: <FileText size={28} />, label: "Files" },
    { icon: <Phone size={28} />, label: "Phone" },
    { icon: <Settings size={28} />, label: "Settings" },
  ];

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-blue-50 to-white flex flex-col justify-end">
      {/* Status Bar (optional aesthetic) */}
      <div className="flex justify-between items-center px-6 pt-4 text-sm text-gray-600">
        <span>12:45</span>
        <div className="flex items-center space-x-1">
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Widgets Grid */}
      <div className="bg-white/70 backdrop-blur-md rounded-t-3xl shadow-inner py-6 px-8 grid grid-cols-4 gap-4 justify-items-center">
        {widgets.map((w, i) => (
          <div key={i} className="flex flex-col items-center space-y-2">
            <div className="bg-white rounded-2xl shadow-md p-3 flex items-center justify-center active:scale-95 transition-transform">
              {w.icon}
            </div>
            <span className="text-xs text-gray-700 font-medium">{w.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
