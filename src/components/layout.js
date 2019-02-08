import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { palette } from '../constants';
import EBGaramondRegular from '../fonts/EBGaramond-Regular.ttf';
import MerriweatherBold from '../fonts/Merriweather-Bold.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "EB Garamond";
    font-style: normal;
    font-weight: 400;
    src: url(${EBGaramondRegular}) format("truetype");
  }

  @font-face {
    font-family: "Merriweather";
    font-style: normal;
    font-weight: 700;
    src: url(${MerriweatherBold}) format("truetype");
  }

  body {
    font-family: 'EB Garamond', serif;
    background-color: ${palette.light};
    color: ${palette.dark};
    font-size: 20px;
    line-height: 1.15;

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
