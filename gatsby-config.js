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
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InB1YmxpYy1hcGk6cmVhZCIsIm5hbWUiOiJibG9nIiwicHJvamVjdElkIjo0NDIsImNoYW5uZWxJZCI6NDM4LCJ0eXBlIjoiY2xpZW50IiwianRpIjoiNjQ0N2U0MDgtMDFiNC00MWQwLTkwY2EtMDE3YzNmZDBkMjYyIiwiY29kZSI6IjY0NDdlNDA4LTAxYjQtNDFkMC05MGNhLTAxN2MzZmQwZDI2MiIsImlhdCI6MTU1OTA3NDYxNn0.sYiKNTlCUVL2Sf3ufLgyi015VTgWuZNDzFEFqXAc6eA',
        design: {
          name: 'living-stories',
          version: '0.0.2'
        }
      }
    },
    {
      resolve: `gatsby-plguin-sass`,
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
        icon: 'src/components/resources/favicon.png'
      }
    }
    // 'gatsby-plugin-offline' caused some problems
  ]
}
