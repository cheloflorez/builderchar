// components/ui/ActionButton.jsx
import React, { useState } from 'react';

const ActionButton = ({ 
  icon, 
  title, 
  subtitle, 
  onClick, 
  color = 'gray',
  disabled = false,
  loading = false,
  confirmAction = false,
  confirmMessage = 'Are you sure you want to perform this action?',
  className = '',
  size = 'md'
}) => {
  const [isConfirming, setIsConfirming] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (disabled || isLoading) return;

    if (confirmAction && !isConfirming) {
      setIsConfirming(true);
      return;
    }

    if (confirmAction && isConfirming) {
      setIsConfirming(false);
    }

    setIsLoading(true);
    try {
      await onClick?.();
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setIsConfirming(false);
  };

  const getColorClasses = () => {
    const colors = {
      amber: 'from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600',
      gray: 'from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600',
      blue: 'from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600',
      green: 'from-green-600 to-green-700 hover:from-green-500 hover:to-green-600',
      red: 'from-red-600 to-red-700 hover:from-red-500 hover:to-red-600',
      purple: 'from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600'
    };
    
    if (isConfirming) {
      return 'from-red-600 to-red-700 hover:from-red-500 hover:to-red-600';
    }
    
    if (disabled) {
      return 'from-gray-500 to-gray-600 cursor-not-allowed';
    }
    
    return colors[color] || colors.gray;
  };

  const getSizeClasses = () => {
    const sizes = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base',
      lg: 'px-6 py-4 text-base'
    };
    return sizes[size] || sizes.md;
  };

  const getDisplayContent = () => {
    if (isLoading || loading) {
      return (
        <span className="flex items-center gap-2">
          <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
          <span className="hidden sm:inline">Loading...</span>
        </span>
      );
    }

    if (isConfirming) {
      return (
        <span className="flex items-center gap-2">
          ⚠️ <span className="hidden sm:inline">Confirm?</span><span className="sm:hidden">Sure?</span>
        </span>
      );
    }

    return (
      <span className="flex items-center gap-2">
        {icon} 
        <div className="flex flex-col items-start">
          <span className="hidden sm:inline">{title}</span>
          <span className="sm:hidden">{title.split(' ')[0]}</span>
          {subtitle && (
            <span className="hidden lg:block text-xs opacity-80 font-normal">
              {subtitle}
            </span>
          )}
        </div>
      </span>
    );
  };

  if (isConfirming) {
    return (
      <div className="flex gap-2">
        <button
          onClick={handleClick}
          className={`group relative ${getSizeClasses()} bg-gradient-to-r ${getColorClasses()} text-white font-bold rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95 ${className}`}
        >
          {getDisplayContent()}
          <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </button>
        <button
          onClick={handleCancel}
          className="group relative px-3 py-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white font-bold rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95 text-sm"
        >
          ✕
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isLoading || loading}
      className={`group relative ${getSizeClasses()} bg-gradient-to-r ${getColorClasses()} text-white font-bold rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95 disabled:transform-none disabled:shadow-none disabled:opacity-50 ${className}`}
    >
      {getDisplayContent()}
      <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 disabled:group-hover:opacity-0 transition-opacity duration-200"></div>
    </button>
  );
};

export default ActionButton;