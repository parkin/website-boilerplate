/**
 Runs npm install in the site directory.
*/

var childProcess = require('child_process');
var path = require('path');

var pjson = require('../package.json');

var appPath = path.join(__dirname, '..', pjson.siteDir);

var npmCommand = 'npm' + (process.platform === 'win32' ? '.cmd' : '');
var params = ['install'];

var install = childProcess.spawn(npmCommand, params, {
  cwd: appPath,
  env: process.env,
  stdio: 'inherit'
});
