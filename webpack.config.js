const path = require('path');

module.exports = {
  entry: {
    vendorScripts : './src/scripts/vendorScripts.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/webpacked'
  }
};
