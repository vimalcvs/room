export const lightTheme = {
  primary: '#FF7A00',  
  secondary: '#1F2937', 

  background: {
    primary: '#FFFFFF',
    secondary: '#F3F4F6',
    gradient: ['#FFFFFF', '#F3F4F6'],
  },
  text: {
    primary: '#1F2937',
    secondary: '#FF7A00',
    muted: 'rgba(31, 41, 55, 0.6)',
  },
  border: {
    primary: '#E5E7EB',
    secondary: 'rgba(255, 122, 0, 0.3)',
  },
  status: {
    success: '#059669',
    error: '#DC2626',
    warning: '#FFB800',
  },
  bottomNav: {
    active: '#FF7A00',
    inactive: '#B0B0B0',
  },
};

export const darkTheme = {
  primary: '#FF7A00',
  secondary: '#E5E7EB',
  background: {
    primary: '#111827',
    secondary: '#1F2937',
    gradient: ['#111827', '#1F2937'],
  },
  text: {
    primary: '#F9FAFB',
    secondary: '#FF7A00',
    muted: 'rgba(249, 250, 251, 0.6)',
  },
  border: {
    primary: '#374151',
    secondary: 'rgba(255, 122, 0, 0.3)',
  },
  status: {
    success: '#10B981',
    error: '#EF4444',
    warning: '#FFB800',
  },
  bottomNav: {
    active: '#FF7A00',
    inactive: '#B0B0B0',
  },
};

export const getThemeColors = (isDark: boolean) => {
  return isDark ? darkTheme : lightTheme;
};

// For backward compatibility
export const colors = lightTheme; 