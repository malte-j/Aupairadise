<a href="https://aupairadise.de" target="_blank" rel="noopener" align="center">
  <img src="https://raw.githubusercontent.com/SkyGuardian42/Aupairadise/master/static/AupairadiseLogoBig.svg?sanitize=true"/>
</a>

[![Netlify Status](https://api.netlify.com/api/v1/badges/01e02403-561e-49e6-9a35-c238a16cce63/deploy-status)](https://app.netlify.com/sites/aupairadise/deploys)

A kinda static Website, generated using Gatsby and a custom theme, with data and embedded images, except for featured images, from a Ghost Blog. 

![Aupairadise Screenshot](https://user-images.githubusercontent.com/12611076/62537517-e4617f00-b850-11e9-8a61-82fcf7ed263b.png)

# Development
To start developing, create a `.ghost.json` file containing the API connection details of your Ghost install. You can create them by accessing the "Integrations" tab in your Ghost Admin and creating a custom integration. It should have the following structure: 

```
{
  "development": {
    "apiUrl": "url",
    "contentApiKey": "key"
  }
}
```

Then just start the development server by either running `npm start` or `ghost develop`, if you installed it locally. 

The files are generally arranged like this:

```
/src
├─/assets         // Assets not used on the site
├─/components     // Gatsby components like the Navbar, etc. 
├─/pages          // Pages not generated by Ghost
├─/styles         // Global style files
└─/templates      // Templates into which Ghost data is injected
/static           // Static files like favicons, etc.
.ghost.json       // Your Ghost API keys
gatsby-config.js  // Gatsby settings and plugins
gatsby-node.js    // Define how pages are generated
package.json      // Node scripts and dependencies
```
