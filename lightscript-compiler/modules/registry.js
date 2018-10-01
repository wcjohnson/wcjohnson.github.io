'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getToolImplementation(toolApi) {
  var babel7 = {
    type: 'remote',
    url: 'https://wcjohnson.github.io/lightscript-compiler/modules/platform/babel-7.1.0.min.js'
  };

  var babel6 = {
    type: 'remote',
    url: 'https://wcjohnson.github.io/lightscript-compiler/modules/platform/babel-6.26.0.min.js'
  }

  return toolApi.lscToolchains({
    versions: [
      // 0.5
      {
        name: '0.5.9',
        babel: babel6,
        lscPlugin: {
          type: 'remote',
          url: 'https://wcjohnson.github.io/lightscript-compiler/modules/compiler/0.5.9.min.js'
        }
      },
      // 3.1
      {
        name: '3.1.1',
        babel: babel6,
        lscPlugin: {
          type: 'remote',
          url: 'https://wcjohnson.github.io/lightscript-compiler/modules/compiler/3.1.1.min.js'
        }
      },
      // 4.0
      {
        name: '4.0.0-alpha.12',
        babel: babel7,
        lscPlugin: {
          type: 'remote',
          url: 'https://wcjohnson.github.io/lightscript-compiler/modules/compiler/4.0.0-alpha.12.min.js'
        }
      },
      {
        name: '4.0.0-alpha.13',
        babel: babel7,
        lscPlugin: {
          type: 'remote',
          url: 'https://wcjohnson.github.io/lightscript-compiler/modules/compiler/4.0.0-alpha.13.min.js'
        }
      }
    ]
  });
}

exports.getToolImplementation = getToolImplementation;
