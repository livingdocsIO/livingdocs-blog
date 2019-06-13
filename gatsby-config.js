module.exports = {
  // siteMetadata is used for sitemap.xml
  siteMetadata: {
    siteUrl: `https://blog.livingdocs.io`
  },
  plugins: [
    {
      resolve: 'gatsby-source-livingdocs',
      options: {
        limit: 35, // defaults to 10, if there is none
        // The accessToken is accessed at buildtime and set in netlify in this case
        accessToken: process.env.accessToken,
        design: {
          name: 'living-stories',
          version: '0.0.2'
        }
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['src/resources/stylesheets/living-stories.scss']
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://blog.livingdocs.io', // @TODO add Link
        sitemap: 'https://blog.livingdocs.io/sitemap.xml', // @TODO add Link
        env: {
          development: {
            policy: [{userAgent: '*', disallow: ['/']}]
          },
          production: {
            policy: [{userAgent: '*', disallow: '/'}] // @TODO change to allow
          }
        }
      }
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
        icon: 'src/resources/assets/images/favicon.png'
      }
    }
    // 'gatsby-plugin-offline' caused some problems
  ]
}
