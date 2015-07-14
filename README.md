# website-boilerplate
My current boilerplate for making a simple website.

## Using the boilerplate

### Dependencies

The only development dependency is [nodejs](https://nodejs.org/).

### Quick Start

```bash
git clone https://github.com/parkin/website-boilerplate.git
cd website-boilerplate
npm install
npm start
```

Then point your browser to [http://localhost:8080/](http://localhost:8080/) and you should see the site!

### Build tasks

We use [Gulp](http://gulpjs.com/) to run build tasks.
The site source code is in the [site](site) directory.
Running the [`gulp build`](tasks/build.js) task will compile what it needs to and copy everything else to the `build` directory.

### Serving the site

Running the `gulp connect` task will build the site and start a server, serving from the `build` directory.
This can also be accessed by

```bash
npm start
```

### Deploying

The project is hosted on Github Pages, using the `gh-pages` branch. There is an npm task to deploy the site to the gh-pages branch.

```bash
npm run deploy
```

*This will push to the `gh-pages` branch, so you must have access to the remote gh-pages branch to use this!*
*Note that this will push to `gh-pages` with the force `-f` flag!*
