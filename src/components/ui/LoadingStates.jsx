// components/ui/LoadingStates.jsx
import React from 'react';

// Loading Spinner genérico
export const LoadingSpinner = ({ size = 'md', color = 'amber' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    amber: 'border-amber-300',
    purple: 'border-purple-400',
    blue: 'border-blue-400',
    green: 'border-green-400',
    red: 'border-red-400',
    white: 'border-white'
  };

  return (
    <div className={`${sizeClasses[size]} border-4 ${colorClasses[color]} border-t-transparent rounded-full animate-spin`}></div>
  );
};

// Loading para Character
export const CharacterLoadingState = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center p-8 bg-black/20 rounded-xl backdrop-blur-sm border border-gray-700/50">
        <LoadingSpinner size="xl" color="amber" />
        <p className="text-amber-300 mt-4 text-lg font-semibold">Loading character...</p>
        <p className="text-gray-400 text-sm mt-2">Please wait while we initialize your build</p>
        
        {/* Progress dots animados */}
        <div className="flex justify-center items-center mt-4 space-x-2">
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-75"></div>
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-150"></div>
        </div>
      </div>
    </div>
  );
};

// Loading para Skills Tree
export const SkillTreeLoadingState = () => {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="text-center p-6 bg-black/30 rounded-lg backdrop-blur-sm">
        <LoadingSpinner size="lg" color="purple" />
        <p className="text-purple-300 mt-3 font-semibold">Loading skill tree...</p>
        <p className="text-gray-400 text-xs mt-1">Preparing your skills</p>
      </div>
    </div>
  );
};

// Loading para Inventory
export const InventoryLoadingState = () => {
  return (
    <div className="flex items-center justify-center h-48">
      <div className="text-center p-6 bg-black/30 rounded-lg backdrop-blur-sm">
        <LoadingSpinner size="md" color="blue" />
        <p className="text-blue-300 mt-3 text-sm font-semibold">Loading items...</p>
        <p className="text-gray-400 text-xs mt-1">Fetching equipment data</p>
      </div>
    </div>
  );
};

// Loading Skeleton para Stats
export const StatsLoadingSkeleton = () => {
  return (
    <div className="animate-pulse p-4">
      <div className="grid grid-cols-3 gap-4">
        {/* Simular rows de stats */}
        {[...Array(12)].map((_, i) => (
          <React.Fragment key={i}>
            <div className="h-4 bg-gray-700 rounded w-16"></div>
            <div className="h-4 bg-gray-600 rounded w-8"></div>
            <div className="h-4 bg-gray-600 rounded w-6"></div>
          </React.Fragment>
        ))}
      </div>
      
      {/* Simular botones de stats */}
      <div className="mt-4 space-y-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex justify-between items-center">
            <div className="h-3 bg-gray-700 rounded w-20"></div>
            <div className="h-6 w-6 bg-gray-600 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Loading para Modal
export const ModalLoadingState = ({ title = "Loading..." }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 border border-amber-600/50 rounded-lg shadow-2xl p-8 text-center min-w-[300px]">
        <LoadingSpinner size="lg" color="amber" />
        <h3 className="text-amber-300 text-lg font-semibold mt-4">{title}</h3>
        <p className="text-gray-400 text-sm mt-2">Processing your request...</p>
        
        {/* Animated border */}
        <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-amber-400/20 via-purple-400/20 to-blue-400/20 opacity-50 animate-pulse"></div>
      </div>
    </div>
  );
};

// Progress Bar temático
export const ProgressBar = ({ progress, label, color = 'amber', showPercentage = true }) => {
  const colorClasses = {
    amber: 'bg-amber-400',
    purple: 'bg-purple-400',
    blue: 'bg-blue-400',
    green: 'bg-green-400',
    red: 'bg-red-400'
  };

  const glowClasses = {
    amber: 'shadow-amber-400/50',
    purple: 'shadow-purple-400/50',
    blue: 'shadow-blue-400/50',
    green: 'shadow-green-400/50',
    red: 'shadow-red-400/50'
  };

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-sm text-gray-300 mb-2">
          <span className="font-medium">{label}</span>
          {showPercentage && <span>{Math.round(progress)}%</span>}
        </div>
      )}
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden border border-gray-600">
        <div 
          className={`h-full ${colorClasses[color]} rounded-full transition-all duration-700 ease-out shadow-lg ${glowClasses[color]} relative`}
          style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

// Dots Loading Animation mejorado
export const DotsLoading = ({ color = 'amber-300', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-3 h-3'
  };

  const spaceClasses = {
    sm: 'space-x-1',
    md: 'space-x-1',
    lg: 'space-x-2'
  };

  return (
    <div className={`flex ${spaceClasses[size]}`}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${sizeClasses[size]} bg-${color} rounded-full animate-bounce`}
          style={{ animationDelay: `${i * 0.15}s` }}
        ></div>
      ))}
    </div>
  );
};

// Loading para Build Analysis
export const BuildAnalysisLoading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 border border-green-600/50 rounded-xl shadow-2xl p-8 text-center min-w-[400px]">
        <div className="relative">
          <LoadingSpinner size="xl" color="green" />
          <div className="absolute inset-0 rounded-full border-4 border-green-400/20 animate-ping"></div>
        </div>
        <h3 className="text-green-300 text-xl font-bold mt-6">Analyzing Build</h3>
        <p className="text-gray-300 mt-2">Computing optimal stat distribution...</p>
        
        {/* Progress steps */}
        <div className="mt-6 space-y-2 text-left max-w-xs mx-auto">
          <div className="flex items-center text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-gray-300">Analyzing stat allocation</span>
          </div>
          <div className="flex items-center text-sm">
            <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
            <span className="text-gray-500">Evaluating skill synergies</span>
          </div>
          <div className="flex items-center text-sm">
            <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
            <span className="text-gray-500">Generating recommendations</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Loading para Save/Export
export const SaveLoadingState = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 border border-amber-600/50 rounded-xl shadow-2xl p-8 text-center min-w-[350px]">
        <LoadingSpinner size="lg" color="amber" />
        <h3 className="text-amber-300 text-lg font-bold mt-4">Saving Build</h3>
        <p className="text-gray-300 mt-2 text-sm">Exporting your character data...</p>
        
        {/* File icon animation */}
        <div className="mt-4 text-4xl text-amber-400 animate-bounce">
          💾
        </div>
        
        <ProgressBar 
          progress={75} 
          label="Progress" 
          color="amber" 
          showPercentage={false}
        />
      </div>
    </div>
  );
};

// Loading para Share
export const ShareLoadingState = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 border border-blue-600/50 rounded-xl shadow-2xl p-8 text-center min-w-[350px]">
        <LoadingSpinner size="lg" color="blue" />
        <h3 className="text-blue-300 text-lg font-bold mt-4">Generating Link</h3>
        <p className="text-gray-300 mt-2 text-sm">Creating shareable build URL...</p>
        
        {/* Link icon animation */}
        <div className="mt-4 text-4xl text-blue-400 animate-pulse">
          🔗
        </div>
      </div>
    </div>
  );
};

export default {
  LoadingSpinner,
  CharacterLoadingState,
  SkillTreeLoadingState,
  InventoryLoadingState,
  StatsLoadingSkeleton,
  ModalLoadingState,
  ProgressBar,
  DotsLoading,
  BuildAnalysisLoading,
  SaveLoadingState,
  ShareLoadingState
};