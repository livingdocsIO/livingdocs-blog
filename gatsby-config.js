module.exports = {
  siteMetadata: {
    title: 'Livingblogs',
    author: 'Livingdocs',
    siteUrl: 'https://blog.livingdocs.io', // @TODO add Link
    description: 'A starter blog demonstrating what Livingdocs can do.',
  },
  plugins: [
    {
      resolve: 'gatsby-source-livingdocs',
      options: {
        limit: 35, // defaults to 10, if there is none
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InB1YmxpYy1hcGk6cmVhZCIsIm5hbWUiOiJMaXZpbmdkb2NzLW9uYm9hcmRpbmciLCJwcm9qZWN0SWQiOjExMSwiY2hhbm5lbElkIjoxMDgsInR5cGUiOiJjbGllbnQiLCJqdGkiOiJlMzAzYWM2OS1hOTQwLTQ4NjYtOTViYS01ZDdkNDk3NDgwMTkiLCJjb2RlIjoiZTMwM2FjNjktYTk0MC00ODY2LTk1YmEtNWQ3ZDQ5NzQ4MDE5IiwiaWF0IjoxNTQxMDg0OTQxfQ.jB0ipjwA0hgxD1bxxZSzHIKbyw1W-swOKe8hbrScBmo',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.URL.com', // @TODO add Link
        sitemap: 'https://URL.com/sitemap.xml', // @TODO add Link
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', disallow: '/' }], // @TODO change to allow
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Livingblogs',
        short_name: 'Li-Blog',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        display: 'minimal-ui',
        icon: 'src/components/resources/favicon.png',
      },
    },
    // 'gatsby-plugin-offline' caused some problems
  ],
}
