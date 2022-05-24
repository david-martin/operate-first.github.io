module.exports = {
  siteMetadata: {
    title: `Operate First`,
    siteUrl: `https://operate-first.cloud/`,
  },
  plugins: [
    'gatsby-plugin-mantine',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-178212082-1',
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/opf-logo.png`
      },
    },
  ],
}