module.exports = {
  // siteMetadata is used for sitemap.xml
  siteMetadata: {
    siteUrl: `https://blog.livingdocs.io`
  },
  plugins: [
    {
      resolve: 'gatsby-source-livingdocs',
      options: {
        limit: 50, // defaults to 10, if there is none
        recursion: true,
        // The accessToken is accessed at buildtime and set in netlify in this case
        accessToken: process.env.accessToken,
        design: {
          name: 'living-stories',
          version: '0.0.2'
        },
        resolveReadingTime: true
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
        host: 'https://blog.livingdocs.io',
        sitemap: 'https://blog.livingdocs.io/sitemap.xml',
        env: {
          development: {
            policy: [{userAgent: '*', disallow: ['/']}]
          },
          production: {
            policy: [{userAgent: '*', allow: '/'}] // @TODO change to allow
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Livingdocs blog',
        short_name: 'Li-Blog',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        display: 'minimal-ui',
        icon: 'src/resources/assets/images/favicon.png'
      }
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: 'UA-47320912-2',
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true
      }
    }
    // 'gatsby-plugin-offline' caused some problems
  ]
}
