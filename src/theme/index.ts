interface Theme {
  light: {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      error: string;
      warning: string;
      info: string;
      success: string;
      background: string;
      dark: string;
    };
  };
}

const theme: Theme = {
  light: {
    colors: {
      primary: '#ececec',
      secondary: '#e1e1e1',
      accent: '#d0d0d0',
      error: '#f44336',
      warning: '#ffeb3b',
      info: '#2196f3',
      success: '#4caf50',
      background: '#f6f6f6',
      dark: '#000000',
    },
  },
};

export default theme;
