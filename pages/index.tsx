import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Jason Di Benedetto"
        description="Software engineer, indie game developer, located in Adelaide Australia"
        additionalLinkTags={[
          {
            rel: 'icon',
            href: 'https://jason.dibenedetto.fyi/favicon.ico',
          },
        ]}
        canonical="https://jason.dibenedetto.fyi"
        openGraph={{
          type: 'website',
          url: 'https://jason.dibenedetto.fyi',
          title: 'Jason Di Benedetto',
          description:
            'Software engineer, indie game developer, located in Adelaide Australia',
          site_name: 'Jason Di Benedetto',
          images: [
            {
              url: 'https://jason.dibenedetto.fyi/og-image.jpg',
              width: 1200,
              height: 630,
            },
          ],
        }}
        twitter={{
          handle: '@jasondibenedetto',
          site: '@jasondibenedetto',
          cardType: 'summary_large_image',
        }}
      />
      <main className="min-h-screen">
        <header className="border-b border-solid border-gray/30 pt-10" />
        <div className="mx-auto mt-16 max-w-3xl px-4 sm:px-6">
          <section className="mb-10 grid gap-0 md:mb-20 md:grid-cols-[1fr,6fr] md:gap-6">
            <div className="hidden md:block" />
            <div>
              <h1 className="text-md mb-2 font-medium text-white sm:text-lg">
                Jason Di Benedetto
              </h1>
              <p className="mb-2 text-sm font-light leading-relaxed text-gray sm:text-base">
                Hey, I&apos;m Jason. I&apos;m a software engineer and indie game
                developer. I&apos;m currently the technical director at the
                design agency{' '}
                <a
                  className="font-medium text-white hover:underline"
                  href="https://mangochutney.com.au"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mango Chutney
                </a>
                .
              </p>
              <p className="mb-2 text-sm font-light leading-relaxed text-gray sm:text-base">
                I also co-founded{' '}
                <a
                  className="font-medium text-white hover:underline"
                  href="https://bluemoon.games"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blue Moon Games
                </a>
                , an independent game studio. In 2021 we created{' '}
                <a
                  className="font-medium text-white hover:underline"
                  href="https://store.steampowered.com/app/1849040/lure"
                  target="_blank"
                  rel="noreferrer"
                >
                  Lure
                </a>
                , a horror fishing game.
              </p>
              <p className="text-sm font-light leading-relaxed text-gray sm:text-base">
                I enjoy working with JavaScript, React, React Native, and Unity.
              </p>
            </div>
          </section>
          <section className="mb-10 grid gap-4 md:mb-20 md:grid-cols-[1fr,6fr] md:gap-6">
            <div className="flex md:justify-end">
              <h2 className="text-sm font-light text-gray-dark">Highlights</h2>
            </div>
            <div>
              <a
                href="https://mangochutney.com.au/work/neura"
                target="_blank"
                rel="noreferrer"
                className="group mb-2 flex items-center justify-between"
              >
                <strong className="text-sm font-medium text-white group-hover:underline sm:text-base">
                  NeuRA
                </strong>
                <span className="mx-2 flex-1 border-b border-dotted border-gray/50 sm:mx-4" />
                <span className="mr-4 text-sm font-light text-gray">Web</span>
                <span className="w-16 font-mono text-sm font-light text-gray-dark">
                  2023
                </span>
              </a>
              <a
                href="https://mangochutney.com.au/work/sahmri"
                target="_blank"
                rel="noreferrer"
                className="group mb-2 flex items-center justify-between"
              >
                <strong className="text-sm font-medium text-white group-hover:underline sm:text-base">
                  SAHMRI
                </strong>
                <span className="mx-2 flex-1 border-b border-dotted border-gray/50 sm:mx-4" />
                <span className="mr-4 text-sm font-light text-gray">Web</span>
                <span className="w-16 font-mono text-sm font-light text-gray-dark">
                  2022
                </span>
              </a>
              <a
                href="https://store.steampowered.com/app/1849040/lure"
                target="_blank"
                rel="noreferrer"
                className="group mb-2 flex items-center justify-between"
              >
                <strong className="text-sm font-medium text-white group-hover:underline sm:text-base">
                  Lure
                </strong>
                <span className="mx-2 flex-1 border-b border-dotted border-gray/50 sm:mx-4" />
                <span className="mr-4 text-sm font-light text-gray">Game</span>
                <span className="w-16 font-mono text-sm font-light text-gray-dark">
                  2021
                </span>
              </a>
              <a
                href="https://mangochutney.com.au/work/animal-welfare-league"
                target="_blank"
                rel="noreferrer"
                className="group mb-2 flex items-center justify-between"
              >
                <strong className="text-sm font-medium text-white group-hover:underline sm:text-base">
                  Animal Welfare League
                </strong>
                <span className="mx-2 flex-1 border-b border-dotted border-gray/50 sm:mx-4" />
                <span className="mr-4 text-sm font-light text-gray">Web</span>
                <span className="w-16 font-mono text-sm font-light text-gray-dark">
                  2020&ndash;
                </span>
              </a>
              <a
                href="https://mangochutney.com.au/work/worlds-greatest-shave"
                target="_blank"
                rel="noreferrer"
                className="group mb-2 flex items-center justify-between"
              >
                <strong className="text-sm font-medium text-white group-hover:underline sm:text-base">
                  World&apos;s Greatest Shave
                </strong>
                <span className="mx-2 flex-1 border-b border-dotted border-gray/50 sm:mx-4" />
                <span className="mr-4 text-sm font-light text-gray">
                  Web, App
                </span>
                <span className="w-16 font-mono text-sm font-light text-gray-dark">
                  2015&ndash;
                </span>
              </a>
              <a
                href="https://mangochutney.com.au/work/light-the-night"
                target="_blank"
                rel="noreferrer"
                className="group mb-2 flex items-center justify-between"
              >
                <strong className="text-sm font-medium text-white group-hover:underline sm:text-base">
                  Light the Night
                </strong>
                <span className="mx-2 flex-1 border-b border-dotted border-gray/50 sm:mx-4" />
                <span className="mr-4 text-sm font-light text-gray">Web</span>
                <span className="w-16 font-mono text-sm font-light text-gray-dark">
                  2015&ndash;
                </span>
              </a>
              <a
                href="https://mangochutney.com.au/work/steptember"
                target="_blank"
                rel="noreferrer"
                className="group mb-2 flex items-center justify-between"
              >
                <strong className="text-sm font-medium text-white group-hover:underline sm:text-base">
                  Steptember
                </strong>
                <span className="mx-2 flex-1 border-b border-dotted border-gray/50 sm:mx-4" />
                <span className="mr-4 text-sm font-light text-gray">App</span>
                <span className="w-16 font-mono text-sm font-light text-gray-dark">
                  2016&ndash;21
                </span>
              </a>
              <a
                href="https://mangochutney.com.au/work/australias-biggest-morning-tea"
                target="_blank"
                rel="noreferrer"
                className="group mb-2 flex items-center justify-between"
              >
                <strong className="text-sm font-medium text-white group-hover:underline sm:text-base">
                  Australia&apos;s Biggest Morning Tea
                </strong>
                <span className="mx-2 flex-1 border-b border-dotted border-gray/50 sm:mx-4" />
                <span className="mr-4 text-sm font-light text-gray">Web</span>
                <span className="w-16 font-mono text-sm font-light text-gray-dark">
                  2016&ndash;19
                </span>
              </a>
              <span className="group mb-2 flex items-center justify-between">
                <strong className="text-sm font-light text-white sm:text-base">
                  Bedford Group
                </strong>
                <span className="mx-2 flex-1 border-b border-dotted border-gray/50 sm:mx-4" />
                <span className="mr-4 text-sm font-light text-gray">Web</span>
                <span className="w-16 font-mono text-sm font-light text-gray-dark">
                  2016&ndash;18
                </span>
              </span>
            </div>
          </section>
          <section className="mb-10 grid gap-4 md:mb-20 md:grid-cols-[1fr,6fr] md:gap-6">
            <div className="flex md:justify-end">
              <h2 className="text-sm font-light text-gray-dark">Speaking</h2>
            </div>
            <div>
              <a
                href="https://anchor.fm/live-booleans/episodes/Lure-with-Blue-Moon-e1af6fq"
                target="_blank"
                rel="noreferrer"
                className="group mb-2 flex items-center justify-between"
              >
                <strong className="text-sm font-medium text-white group-hover:underline sm:text-base">
                  Live Booleans Podcast
                </strong>
                <span className="mx-2 flex-1 border-b border-dotted border-gray/50 sm:mx-4" />
                <span className="w-16 font-mono text-sm font-light text-gray-dark">
                  2021
                </span>
              </a>
              <a
                href="https://bluemoongames.itch.io/lure/devlog/310841/one-week-of-lure"
                target="_blank"
                rel="noreferrer"
                className="group mb-2 flex items-center justify-between"
              >
                <strong className="text-sm font-medium text-white group-hover:underline sm:text-base">
                  One Week of Lure
                </strong>
                <span className="mx-2 flex-1 border-b border-dotted border-gray/50 sm:mx-4" />
                <span className="w-16 font-mono text-sm font-light text-gray-dark">
                  2021
                </span>
              </a>
            </div>
          </section>
          <section className="mb-20 grid gap-4 md:grid-cols-[1fr,6fr] md:gap-6">
            <div className="flex md:justify-end">
              <h2 className="text-sm font-light text-gray-dark">Online</h2>
            </div>
            <div>
              <a
                href="https://github.com/jasondibenedetto"
                target="_blank"
                rel="noreferrer"
                className="group mb-2 flex items-center justify-between"
              >
                <strong className="text-sm font-medium text-white group-hover:underline sm:text-base">
                  GitHub
                </strong>
                <span className="mx-2 flex-1 border-b border-dotted border-gray/50 sm:mx-4" />
              </a>
              <a
                href="https://twitter.com/jasondbenedetto"
                target="_blank"
                rel="noreferrer"
                className="group mb-2 flex items-center justify-between"
              >
                <strong className="text-sm font-medium text-white group-hover:underline sm:text-base">
                  Twitter
                </strong>
                <span className="mx-2 flex-1 border-b border-dotted border-gray/50 sm:mx-4" />
              </a>
              <a
                href="https://linkedin.com/in/jasondibenedetto"
                target="_blank"
                rel="noreferrer"
                className="group mb-2 flex items-center justify-between"
              >
                <strong className="text-sm font-medium text-white group-hover:underline sm:text-base">
                  LinkedIn
                </strong>
                <span className="mx-2 flex-1 border-b border-dotted border-gray/50 sm:mx-4" />
              </a>
              <a
                href="mailto:jason.dibenedetto6@gmail.com"
                className="group mb-2 flex items-center justify-between"
              >
                <strong className="text-sm font-medium text-white group-hover:underline sm:text-base">
                  Email
                </strong>
                <span className="mx-2 flex-1 border-b border-dotted border-gray/50 sm:mx-4" />
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
