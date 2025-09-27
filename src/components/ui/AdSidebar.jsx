import React from 'react';

const AdSidebar = ({ position, adImage = null, adLink = null }) => {
  return (
    <div className={`hidden 2xl:flex w-[150px] min-h-screen items-center justify-center px-4 py-8`}>
      
      {/* Single Ad Slot - Sin bordes ni backgrounds que lo hagan flotar */}
      <div className="w-full h-[800px] rounded-lg overflow-hidden">
        {adImage ? (
          <a 
            href={adLink || '#'} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full h-full hover:opacity-90 transition-opacity"
          >
            <img 
              src={adImage} 
              alt="Advertisement"
              className="w-full h-full object-cover rounded-lg"
            />
          </a>
        ) : (
          <div className="w-full h-full bg-black/20 rounded-lg flex items-center justify-center border border-gray-700/30">
            <div className="text-center text-gray-500 text-xs">
              <div className="w-12 h-12 mx-auto mb-3 bg-gray-700/50 rounded-lg flex items-center justify-center">
                📢
              </div>
              <p className="font-medium">Ad Space</p>
              <p className="text-[10px] opacity-70">142x800</p>
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default AdSidebar;