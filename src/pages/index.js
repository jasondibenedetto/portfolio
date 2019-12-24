import React from 'react';
import styled, { keyframes } from 'styled-components';
import { transparentize } from 'polished';
import Layout from '../components/layout';
import SEO from '../components/seo';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}`;

const Wrapper = styled.div`
  animation: ${fadeIn} 2s linear;
  display: flex;
  height: 100vh;
  justify-content: center;
  margin: auto;
  padding: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  padding: 1rem;
  width: 100%;

  ${({ theme }) => `
    ${theme.breakpoints.medium} {
      max-width: 32rem;
    }
  `}
`;

const Text = styled.p`
  font-size: 1.1rem;
  font-weight: 400;

  ${({ theme }) => `
    ${theme.breakpoints.medium} {
      font-size: 0.9rem;
    }
  `}
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;

  ${({ theme }) => `
    ${theme.breakpoints.medium} {
      font-size: 1.5rem;
    }
  `}
`;

const Emoji = styled.span`
  font-size: 1.5rem;
  font-style: normal;
  margin-right: 0.5rem;

  ${({ theme }) => `
    ${theme.breakpoints.medium} {
      font-size: 1rem;
    }
  `}
`;

const PreHeading = styled.h2`
  font-size: 0.9rem;
  font-style: italic;
  font-weight: 400;
  margin-bottom: 1rem;

  ${({ theme }) => `
    ${theme.breakpoints.medium} {
      font-size: 0.75rem;
    }
  `}
`;

const PostHeading = styled(Text).attrs({ as: 'h3' })`
  line-height: 1.5;
`;

const Line = styled.hr`
  border: 0;
  border-top: 0.08rem solid
    ${({ theme }) => transparentize(0.7, theme.colors.line)};
  height: 0;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

const Link = styled(Text).attrs({ as: 'a' })`
  border-bottom: 1px solid
    ${({ theme }) => transparentize(0.8, theme.colors.text)};
  transition: background-color 300ms ease-in-out;

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) =>
      transparentize(0.5, theme.colors.highlight)};
  }
`;

const List = styled.ul`
  padding-left: 1rem;

  li {
    margin-bottom: 1rem;
  }
`;

const Inner = styled.div``;

const IndexPage = () => (
  <Layout>
    <SEO title="Jason Di Benedetto" />
    <Wrapper>
      <Container>
        <Inner>
          <PreHeading>
            <Emoji>
              <span role="img" aria-label="Wave">
                👋
              </span>
            </Emoji>
            Hello. I am&hellip;
          </PreHeading>
          <Heading>Jason Di&nbsp;Benedetto</Heading>
          <PostHeading>
            Programmer, coffee enthusiast, board game lover. Senior Software
            Engineer at{' '}
            <Link href="https://mangochutney.com.au">Mango Chutney</Link>.
            Co-Founder and Game Designer at{' '}
            <Link href="https://bluemoon.games">Blue Moon Games</Link>.
          </PostHeading>
          <Line />
          <List>
            <li>
              <Link href="https://github.com/jasondibenedetto">GitHub</Link>
            </li>
            <li>
              <Link href="https://twitter.com/jasondbenedetto">Twitter</Link>
            </li>
            <li>
              <Link href="https://linkedin.com/in/jasondibenedetto">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="mailto:jason.dibenedetto6@gmail.com">Email</Link>
            </li>
          </List>
          <Line />
          <Link href="https://github.com/jasondibenedetto/portfolio">
            View Source
          </Link>
        </Inner>
      </Container>
    </Wrapper>
  </Layout>
);

export default IndexPage;
