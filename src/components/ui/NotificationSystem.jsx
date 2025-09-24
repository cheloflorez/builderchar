// components/ui/NotificationSystem.jsx
import React, { useEffect, useState } from 'react';

const NotificationSystem = ({ notifications, removeNotification }) => {
  return (
    <div className="fixed top-4 right-4 z-[60] space-y-3 max-w-sm">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onRemove={() => removeNotification(notification.id)}
        />
      ))}
    </div>
  );
};

const NotificationItem = ({ notification, onRemove }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Animación de entrada
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-dismiss después de la duración especificada
    if (notification.duration && notification.duration > 0) {
      const timer = setTimeout(() => {
        handleRemove();
      }, notification.duration);
      return () => clearTimeout(timer);
    }
  }, [notification.duration]);

  const handleRemove = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onRemove();
    }, 300);
  };

  const getNotificationStyles = () => {
    const baseStyles = "transform transition-all duration-300 ease-in-out";
    const visibilityStyles = isVisible && !isLeaving
      ? "translate-x-0 opacity-100 scale-100"
      : "translate-x-full opacity-0 scale-95";

    switch (notification.type) {
      case 'success':
        return `${baseStyles} ${visibilityStyles} bg-gradient-to-r from-green-600/90 to-green-700/90 border-green-500/50`;
      case 'error':
        return `${baseStyles} ${visibilityStyles} bg-gradient-to-r from-red-600/90 to-red-700/90 border-red-500/50`;
      case 'warning':
        return `${baseStyles} ${visibilityStyles} bg-gradient-to-r from-yellow-600/90 to-yellow-700/90 border-yellow-500/50`;
      case 'info':
        return `${baseStyles} ${visibilityStyles} bg-gradient-to-r from-blue-600/90 to-blue-700/90 border-blue-500/50`;
      case 'skill':
        return `${baseStyles} ${visibilityStyles} bg-gradient-to-r from-purple-600/90 to-purple-700/90 border-purple-500/50`;
      case 'item':
        return `${baseStyles} ${visibilityStyles} bg-gradient-to-r from-amber-600/90 to-amber-700/90 border-amber-500/50`;
      default:
        return `${baseStyles} ${visibilityStyles} bg-gradient-to-r from-gray-600/90 to-gray-700/90 border-gray-500/50`;
    }
  };

  const getNotificationIcon = () => {
    switch (notification.type) {
      case 'success':
        return '✅';
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      case 'info':
        return 'ℹ️';
      case 'skill':
        return '🌟';
      case 'item':
        return '⚔️';
      default:
        return '💬';
    }
  };

  return (
    <div
      className={`${getNotificationStyles()} backdrop-blur-sm border rounded-lg shadow-2xl p-4 cursor-pointer group hover:scale-105 min-w-[300px]`}
      onClick={handleRemove}
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className="flex-shrink-0 text-lg">
          {notification.icon || getNotificationIcon()}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h4 className="text-white font-semibold text-sm truncate">
              {notification.title}
            </h4>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRemove();
              }}
              className="text-white/60 hover:text-white/90 text-lg leading-none ml-2"
            >
              ×
            </button>
          </div>

          {notification.message && (
            <p className="text-white/90 text-xs mt-1 leading-relaxed">
              {notification.message}
            </p>
          )}

          {/* Detalles extra para ciertos tipos */}
          {notification.details && (
            <div className="mt-2 p-2 bg-black/20 rounded text-xs">
              {Array.isArray(notification.details) ? (
                <div className="space-y-1">
                  {notification.details.map((detail, index) => (
                    <div key={index} className="text-white/80">
                      • {detail}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-white/80">{notification.details}</div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Progress bar para auto-dismiss */}
      {notification.duration && notification.duration > 0 && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 rounded-b-lg overflow-hidden">
          <div
            className="h-full bg-white/30 transition-all ease-linear"
            style={{
              width: isLeaving ? '0%' : '100%',
              transitionDuration: isLeaving ? '300ms' : `${notification.duration}ms`
            }}
          />
        </div>
      )}
    </div>
  );
};

export default NotificationSystem;