# Matts Car Care

> Automotive detailing in Toowoomba

I am currently building this site for the client using Nuxt.js & Vue.js. The ultimate goal is to ensure the site is **crazy fast**, **PWA enabled**, all assets and code would be available offline for the users to enjoy a fast browsing experience. Before installing this project on your local machine, change the **package.json** setting to the one below otherwise it won't work. 

## Package json settings

In the package.json file, I have added the nuxt host settings as seen below. This is so I am able to visualise and test the site on mobile devices without the need for Chrome Dev tools. In order for this to work on your local machine, change *YOUR_IP_ADDRESS* to your own IP address. Or if you're like other devs who prefer to use Chrome dev tools, change *YOUR_IP_ADDRESS* to **0.0.0.0** for localhost.

```json
...
"config": {
    "nuxt": {
      "host": "YOUR_IP_ADDRESS",
      "port": "3333"
    }
  },
...
```

For detailed explanation on how this works, checkout the [Nuxt.js server property docs](https://nuxtjs.org/api/configuration-server#basic-example-code-nuxt-config-js-code-).

## Build Setup

```bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).