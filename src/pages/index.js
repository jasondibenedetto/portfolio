import React from 'react';
import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';
import { transparentize } from 'polished';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { palette } from '../constants';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}`;

const Wrapper = styled.div`
  display: flex;
  margin: auto;
  height: 100vh;
  padding: 1rem;
  justify-content: center;
  animation: ${fadeIn} 3s linear;
`;

const Container = styled.div`
  width: 100%;
  max-width: 40rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  ${media.lessThan('medium')`
    max-width: 32rem;
  `}
`;

const Heading = styled.h2`
  color: ${palette.light};
  font-size: 2.5rem;
  text-transform: lowercase;
  letter-spacing: 0.3rem;
  margin-bottom: 3rem;
  margin-top: 3rem;
  font-weight: 400;

  ${media.lessThan('small')`
    font-size: 1.8rem;
  `}
`;

const Emoji = styled.span`
  font-size: 1rem;
`;

const PreHeading = styled.h1`
  font-weight: 400;
  font-size: 0.85rem;
  color: ${palette.gray};
  line-height: 2;

  ${media.lessThan('medium')`
    font-size: 0.75rem;
  `}
`;

const PostHeading = styled.h1`
  font-weight: 400;
  font-size: 1.4rem;
  color: ${palette.light};

  ${media.lessThan('small')`
    font-size: 1rem;
  `}
`;

const Line = styled.hr`
  border: 0;
  height: 0;
  border-top: 0.08rem solid ${transparentize(0.7, palette.gray)};
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

const Link = styled.a`
  color: ${palette.highlight};
  text-decoration: none;
  transition: border 300ms ease-in-out;
  border-bottom: 0.09rem solid transparent;

  &:hover,
  &:focus,
  &:active {
    border-bottom: 0.09rem solid ${transparentize(0.4, palette.highlight)};
  }
`;

const Paragraph = styled.p`
  line-height: 1.5;
  font-size: 0.9rem;

  ${media.lessThan('small')`
    font-size: 0.75rem;
  `}
`;

const Footer = styled.div`
  ${Link} {
    font-size: 0.75rem;
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
            <Emoji role="img" aria-label="Wave">
              👋
            </Emoji>
            &nbsp;hello. i am&hellip;
          </PreHeading>
          <Heading>Jason Di&nbsp;Benedetto</Heading>
          <PostHeading>I write code.</PostHeading>
          <Paragraph>
            I can be found on{' '}
            <Link href="https://github.com/jasondibenedetto">GitHub</Link> and{' '}
            <Link href="https://twitter.com/jasondbenedetto">Twitter</Link>.
          </Paragraph>
          <Line />
          <Footer>
            <Link href="mailto:jason.dibenedetto6@gmail.com">
              jason.dibenedetto6@gmail.com
            </Link>
          </Footer>
        </Inner>
      </Container>
    </Wrapper>
  </Layout>
);

export default IndexPage;
