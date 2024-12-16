// src/lib/theme.ts
import { createGlobalStyle } from 'styled-components';

export const theme = {
    colors: {
      primary: '#004d99',
      secondary: '#27ae60',
      background: '#f4f7fa',
      text: '#2d3436',
      link: '#3498db',
    },
    fonts: {
      primary: '"Roboto", sans-serif',
      secondary: '"Merriweather", serif',
    },
    spacing: (value: number) => `${value * 8}px`, // 8px spacing scale
    breakpoints: {
      mobile: '768px',
      tablet: '1024px',
      desktop: '1200px',
    },
    borderRadius: '5px',
    shadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };
  

  export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fonts.primary};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: 1.5;
  }

  a {
    color: ${theme.colors.link};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.secondary};
  }
`;
