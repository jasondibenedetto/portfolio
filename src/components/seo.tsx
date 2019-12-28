import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        author
        description
        image
        url
      }
    }
  }
`;

interface Props {
  description?: string;
  lang: string;
  meta: any[];
  title: string;
  keywords: string[];
}

const SEO = ({ description, lang, meta, keywords, title }: Props) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;

        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s`}
            meta={[
              {
                name: `description`,
                content: metaDescription
              },
              {
                name: 'author',
                content: data.site.siteMetadata.author
              },
              {
                property: `og:title`,
                content: title
              },
              {
                property: `og:description`,
                content: metaDescription
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                property: 'og:url',
                content: data.site.siteMetadata.url
              },
              {
                property: 'og:image',
                content: `${data.site.siteMetadata.url}${data.site.siteMetadata.image}`
              },
              {
                property: 'og:site_name',
                content: data.site.siteMetadata.title
              },
              {
                name: `twitter:card`,
                content: `summary`
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author
              },
              {
                name: `twitter:title`,
                content: title
              },
              {
                name: `twitter:description`,
                content: metaDescription
              },
              ...(keywords.length > 0
                ? [
                    {
                      name: `keywords`,
                      content: keywords.join(`, `)
                    }
                  ]
                : []),
              ...meta
            ]}
            link={[
              {
                rel: 'canonical',
                href: data.site.siteMetadata.url
              }
            ]}
          />
        );
      }}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: []
};

export default SEO;
