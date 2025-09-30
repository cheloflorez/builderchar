import React from 'react';

const AdSidebar = ({ position, adImage = null, adLink = null }) => {
  // Configuración responsive más detallada
  const responsiveConfig = {
    container: "hidden lg:flex lg:w-[80px] xl:w-[100px] 2xl:w-[150px] min-h-screen items-center justify-center lg:px-1 xl:px-2 2xl:px-4 py-4 lg:py-6 xl:py-8",
    adContainer: "w-full lg:h-[300px] xl:h-[500px] 2xl:h-[800px] rounded-lg overflow-hidden",
    placeholder: {
      icon: "lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-12 2xl:h-12 mx-auto lg:mb-1 xl:mb-2 2xl:mb-3  rounded-lg flex items-center justify-center lg:text-xs xl:text-sm 2xl:text-base",
      title: "font-medium lg:text-[10px] xl:text-xs 2xl:text-sm",
      subtitle: "lg:text-[8px] xl:text-[9px] 2xl:text-[10px] opacity-70"
    }
  };

  return (
    <div className={responsiveConfig.container}>
      <div className={responsiveConfig.adContainer}>
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
          <div className="w-full h-full  rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className={responsiveConfig.placeholder.icon}>
                📢
              </div>
              <p className={responsiveConfig.placeholder.title}>
                <span className="lg:hidden xl:inline">Ad Space</span>
                <span className="lg:inline xl:hidden">Ad</span>
              </p>
              <p className={responsiveConfig.placeholder.subtitle}>
                <span className="lg:hidden xl:inline">Responsive</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdSidebar;