// hooks/useNotifications.js
import { useState, useCallback } from 'react';

export const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((notification) => {
    const id = Date.now() + Math.random();
    const newNotification = {
      id,
      duration: 4000, // 4 segundos por defecto
      ...notification,
    };

    setNotifications(prev => [...prev, newNotification]);
    return id;
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  const clearAllNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  // Funciones helper para tipos específicos
  const notifySuccess = useCallback((title, message, options = {}) => {
    return addNotification({
      type: 'success',
      title,
      message,
      ...options
    });
  }, [addNotification]);

  const notifyError = useCallback((title, message, options = {}) => {
    return addNotification({
      type: 'error',
      title,
      message,
      duration: 6000, // Errores duran más
      ...options
    });
  }, [addNotification]);

  const notifyWarning = useCallback((title, message, options = {}) => {
    return addNotification({
      type: 'warning',
      title,
      message,
      ...options
    });
  }, [addNotification]);

  const notifyInfo = useCallback((title, message, options = {}) => {
    return addNotification({
      type: 'info',
      title,
      message,
      ...options
    });
  }, [addNotification]);

  const notifyInsufficientPoints = useCallback(() => {
    return notifyError(
      'Insufficient Points',
      'You need more stat points to perform this action',
      {
        icon: '🚫',
        duration: 3000
      }
    );
  }, [notifyError]);

  const notifyLevelRequired = useCallback((requiredLevel) => {
    return notifyWarning(
      'Level Required',
      `You need to be level ${requiredLevel} to access this feature`,
      {
        icon: '🔒',
        duration: 4000
      }
    );
  }, [notifyWarning]);

  const notifyBuildSaved = useCallback(() => {
    return notifySuccess(
      'Build Saved',
      'Your character build has been saved successfully',
      {
        icon: '💾',
        duration: 3000
      }
    );
  }, [notifySuccess]);

  const notifyBuildReset = useCallback(() => {
    return notifyWarning(
      'Build Reset',
      'Your character has been reset to initial state',
      {
        icon: '🔄',
        duration: 3000
      }
    );
  }, [notifyWarning]);

  return {
    notifications,
    addNotification,
    removeNotification,
    clearAllNotifications,
    // Helpers generales
    notifySuccess,
    notifyError,
    notifyWarning,
    notifyInfo,
    notifyInsufficientPoints,
    notifyLevelRequired,
    notifyBuildSaved,
    notifyBuildReset,
  };
};