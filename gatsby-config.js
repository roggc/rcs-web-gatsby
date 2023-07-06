const siteUrl = process.env.URL || "https://reactcontextslices.gatsbyjs.io";

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `react-context-slices`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        //     query: `
        //   {
        //     allSitePage {
        //       nodes {
        //         path
        //       }
        //     }
        //     allWpContentNode(filter: {nodeType: {in: ["Post", "Page"]}}) {
        //       nodes {
        //         ... on WpPost {
        //           uri
        //           modifiedGmt
        //         }
        //         ... on WpPage {
        //           uri
        //           modifiedGmt
        //         }
        //       }
        //     }
        //   }
        // `,
        resolveSiteUrl: () => siteUrl,
        // resolvePages: ({
        //   allSitePage: { nodes: allPages },
        //   allWpContentNode: { nodes: allWpNodes },
        // }) => {
        //   const wpNodeMap = allWpNodes.reduce((acc, node) => {
        //     const { uri } = node;
        //     acc[uri] = node;

        //     return acc;
        //   }, {});

        //   return allPages.map((page) => {
        //     return { ...page, ...wpNodeMap[page.path] };
        //   });
        // },
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          };
        },
      },
    },
  ],
};
