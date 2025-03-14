declare module 'react-notifications' {
  export const NotificationManager: {
    info: (message: string) => void;
    error: (message: string) => void;
    success: (message: string) => void;
    warning: (message: string) => void;
  };
  
  export const NotificationContainer: React.ComponentType<any>;
} 