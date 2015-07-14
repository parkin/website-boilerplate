# website-boilerplate
[![devDependency Status](https://david-dm.org/parkin/website-boilerplate/dev-status.svg)](https://david-dm.org/parkin/website-boilerplate#info=devDependencies)

My current boilerplate for making a simple website.

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

### Organization

There are **two** `package.json` files.

1. [package.json](package.json) - This contains dependencies needed for any build/deploy tasks.
2. [site/package.json](site/package.json) - This contains dependencies for the actual site.

### Gulp tasks

We use [Gulp](http://gulpjs.com/) to run build tasks.
The site source code is in the [site](site) directory.
Running the [`gulp build`](tasks/build.js) task will compile what it needs to and copy everything else to the `build` directory.

#### Serving the site

Running the `gulp connect` task will build the site and start a live-reload server, serving from the `build` directory.
This can also be accessed by

```bash
npm start
```

#### Building the site

To skip starting the server and only build the site, do

```bash
npm run build
```

#### Deploying

The project is hosted on Github Pages, using the `gh-pages` branch.
There is an npm task to deploy the site to the `gh-pages` branch.
This task builds the site, copies the build to the `.publish` directory, and then pushes `.publish` to the remote `gh-pages`.

```bash
npm run deploy
```

*This will push to the `gh-pages` branch, so you must have access to the remote gh-pages branch to use this!*
*Note that this will push to `gh-pages` with the force `-f` flag!*

# License

[MIT](LICENSE)
