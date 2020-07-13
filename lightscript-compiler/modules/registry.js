'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getToolImplementation(toolApi) {
  var babel7 = {
    type: 'remote',
    url: 'https://wcjohnson.github.io/lightscript-compiler/modules/platform/babel-7.min.js'
  };

  var babel7_10_4 = {
    type: 'remote',
    url: 'https://wcjohnson.github.io/lightscript-compiler/modules/platform/babel-7.10.4.min.js'
  };

  var babel6 = {
    type: 'remote',
    url: 'https://wcjohnson.github.io/lightscript-compiler/modules/platform/babel-6.min.js'
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
      // 1.1
      {
        name: '1.1.0',
        babel: babel6,
        lscPlugin: {
          type: 'remote',
          url: 'https://wcjohnson.github.io/lightscript-compiler/modules/compiler/1.1.0.min.js'
        }
      },
      // 2.0
      {
        name: '2.0.1',
        babel: babel6,
        lscPlugin: {
          type: 'remote',
          url: 'https://wcjohnson.github.io/lightscript-compiler/modules/compiler/2.0.1.min.js'
        }
      },
      // 2.1
      {
        name: '2.1.1',
        babel: babel6,
        lscPlugin: {
          type: 'remote',
          url: 'https://wcjohnson.github.io/lightscript-compiler/modules/compiler/2.1.1.min.js'
        }
      },
      // 2.2
      {
        name: '2.2.1',
        babel: babel6,
        lscPlugin: {
          type: 'remote',
          url: 'https://wcjohnson.github.io/lightscript-compiler/modules/compiler/2.2.1.min.js'
        }
      },
      // 2.3
      {
        name: '2.3.2',
        babel: babel6,
        lscPlugin: {
          type: 'remote',
          url: 'https://wcjohnson.github.io/lightscript-compiler/modules/compiler/2.3.2.min.js'
        }
      },
      // 3.0
      {
        name: '3.0.0',
        babel: babel6,
        lscPlugin: {
          type: 'remote',
          url: 'https://wcjohnson.github.io/lightscript-compiler/modules/compiler/3.0.0.min.js'
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
      },
      {
        name: '4.0.0-alpha.21',
        babel: babel7,
        lscPlugin: {
          type: 'remote',
          url: 'https://wcjohnson.github.io/lightscript-compiler/modules/compiler/4.0.0-alpha.21.min.js'
        }
      },
      {
        name: '4.0.0-alpha.22',
        babel: babel7,
        lscPlugin: {
          type: 'remote',
          url: 'https://wcjohnson.github.io/lightscript-compiler/modules/compiler/4.0.0-alpha.22.min.js'
        }
      },
      {
        name: '4.0.0-alpha.23',
        babel: babel7,
        lscPlugin: {
          type: 'remote',
          url: 'https://unpkg.com/@lightscript/webpacked@4.0.0-alpha.23/pluginToolCjs.js'
        }
      },
      {
        name: '4.0.0-alpha.25',
        babel: babel7_10_4,
        lscPlugin: {
          type: 'remote',
          url: 'https://unpkg.com/@lightscript/webpacked@4.0.0-alpha.25/pluginToolCjs.js'
        }
      },
    ]
  });
}

exports.getToolImplementation = getToolImplementation;
