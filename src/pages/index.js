import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { transparentize } from 'polished';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { palette } from '../constants';

const Wrapper = styled.div`
  display: flex;
  margin: auto;
  height: 100vh;
  padding: 1rem;
  justify-content: center;
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
  font-family: 'Merriweather', serif;
  color: ${palette.dark};
  font-weight: 700;
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  text-shadow: 0.1rem 0.1rem 0rem ${palette.gray},
    0.2rem 0.2rem 0rem ${transparentize(0.8, palette.dark)};
  margin-bottom: 2rem;
  margin-top: 2rem;

  ${media.lessThan('small')`
    font-size: 1.8rem;
  `}
`;

const Emoji = styled.span.attrs({
  role: 'img',
  ariaLabel: 'Wave'
})`
  font-size: 1rem;
`;

const PreHeading = styled.h1`
  font-family: 'Merriweather', serif;
  font-weight: 700;
  font-size: 0.85rem;
  color: ${palette.darkGray};
  line-height: 2;

  ${media.lessThan('medium')`
    font-size: 0.7rem;
  `}
`;

const PostHeading = styled.h1`
  font-family: 'Merriweather', serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: ${palette.dark};

  ${media.lessThan('small')`
    font-size: 1rem;
  `}
`;

const Line = styled.hr`
  border: 0;
  height: 0;
  border-top: 0.08rem solid ${transparentize(0.9, palette.dark)};
  margin-bottom: 2rem;
  margin-top: 1.5rem;
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

  ${media.lessThan('small')`
    font-size: 1.1rem;
  `}
`;

const Footer = styled.div`
  ${Link} {
    font-size: 0.9rem;
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
            <Emoji>👋</Emoji>&nbsp;hello. i am&hellip;
          </PreHeading>
          <Heading>Jason&nbsp;Di Benedetto</Heading>
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
