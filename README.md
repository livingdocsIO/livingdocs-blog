## Quick start

1.  **Clone this repo**

    Start by cloning this repository and installing the dependencies.

    ```sh
    git clone
    npm install
    ```

2.  **Use your own API Key**

    in the root of your folder in `gatsby-config.js`, you'll have to swap out _yourToken_
    You can find your token here: URL


    ````
    {
      resolve: 'gatsby-source-livingdocs',
      options: {
        accessToken:
          'yourToken',
      },
    },

    ````

    _In a nutshell, the Livingdocs plugin will get the data and from the json that is returned, the graphQL schema will be created at build time. You can read more about the plugin here_

3.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd livingblogs/
    gatsby develop
    ```

4.  **Open the source code and start editing!**

    Gatsby will run two things now:

    Your site at `http://localhost:8000`

    And a GraphQL server at: `http://localhost:8000/___graphql`

    _Note: This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Perfect. You got your starter project running!
    It still has the Livingdocs branding,

## Where to go from here

1. **Remove our branding, and use your own**

   The following folders and files are going to be interesting starting points
   ├── src
   ├── components
   ├── header
   ├── favicon.png
   ├── footer.js
   ├── layout.js
   ├── living-times014.css
   ├── pages
   ├── 404.js
   ├── index.js
   ├── gatsby-config.js

2. **Plugin overview**

We've added plugins that should be included in our opinion. We will shortly go over which plugins were used.

_All plugins can be found in gatsby-config.js_

**gatsby-source-livingdocs**
Used to request the data from Livingdocs, afterwards used in _gatsby-node.js_ to programmatically create the pages.

**gatsby-plugin-react-helmet**
Creates the <head> with metadata, css, social media headers, etc.

**gatsby-plugin-sitemap**
Creates the sitemap, which can be accessed here:
`http://localhost:8000/sitemap.xml`

**gatsby-plugin-robots-txt**
Creates the robot.txt file, which can be seen here:
`http://localhost:8000/robots.txt`

**gatsby-plugin-manifest**
Creates the PWA-Manifest

**gatsby-plugin-offline**
This is helps making your blog / website accessible, even without internet connection

3. **This Blog in combination with Livingdocs**

Weather you're an author, or a developer trying to understand what's going on so here are some key features:

**A meaningful title in Livingdocs**
This will be crucial for SEO reasons. Under the hood

      ├── src
      ├── components
        ├── layout.js
      ├── templates
        ├── blog-post.js

The layout & blog-post components will set up all the neccessary data for google, facebook, twitter within the <head> component.
So having meaningful `titles, descriptions, keywords` are very important, for the user to find the content.
The good part? We've done lots of research regarding SEO for you. Thus, you can focus on using livingdocs and a good part of the technical implementation has been already done for you, if you use our starterkits.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)
