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
        // TODO PUT ENV TOKEN ON NETLIFY
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InB1YmxpYy1hcGk6cmVhZCIsIm5hbWUiOiJkZCIsInByb2plY3RJZCI6NDMyLCJjaGFubmVsSWQiOjQyOCwidHlwZSI6ImNsaWVudCIsImp0aSI6ImM2OTEzNWE3LWM5ZTUtNDZkOC05NGQ0LTI0ODkxNmE3MDlmMyIsImNvZGUiOiJjNjkxMzVhNy1jOWU1LTQ2ZDgtOTRkNC0yNDg5MTZhNzA5ZjMiLCJpYXQiOjE1NTk5MTExNTN9.56GvRprcksyBnWXNUMyNHg2zV9Cti5UboOleCPduuhQ',
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
