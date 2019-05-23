import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { palette } from '../constants';
import InconsolataRegular from '../fonts/Inconsolata-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Inconsolata";
    font-style: normal;
    font-weight: 400;
    src: url(${InconsolataRegular}) format("truetype");
  }

  body {
    font-family: 'Inconsolata', monospace;
    background-color: ${palette.dark};
    color: ${palette.light};
    font-size: 20px;
    font-weight: 400;
    line-height: 1.15;
    letter-spacing: 0.1rem;

    * {
      box-sizing: border-box;
    }
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Normalize />
        <GlobalStyle />
        {children}
      </>
    )}
  />
);

export default Layout;
