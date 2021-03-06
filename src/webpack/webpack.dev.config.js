'use strict';

function dev() {
  return {
    mode: 'development',
    devtool: 'inline-cheap-module-source-map',
    output: {
      filename: 'bundle.js'
    }
  };
}

module.exports = dev;
