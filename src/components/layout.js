import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.1;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }
`;

const Layout = ({ children }) => (
  <ThemeProvider
    theme={{
      colors: {
        background: '#fff',
        text: '#17171a',
        highlight: '#f2cba2',
        line: '#a3acbf'
      },
      breakpoints: {
        small: '@media (max-width: 480px)',
        medium: '@media (max-width: 768px)'
      }
    }}
  >
    <>
      <Normalize />
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);

export default Layout;
