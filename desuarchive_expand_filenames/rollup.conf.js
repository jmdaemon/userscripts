const path = require('path');
const { getRollupPlugins } = require('@gera2ld/plaid');
const userscript = require('rollup-plugin-userscript');
const pkg = require('./package.json');

// Constants
const DIST = 'dist';
const FILENAME = `${pkg.name}-${pkg.version}`;
//const RELEASE = pkg.name;

const bundleOptions = {
  extend: true,
  esModule: false,
};
const postcssOptions = {
  ...require('@gera2ld/plaid/config/postcssrc'),
  inject: false,
  minimize: true,
};
const rollupConfig = [
  {
    input: {
      input: 'src/index.js',
      plugins: [
        ...getRollupPlugins({
          esm: true,
          minimize: false,
          postcss: postcssOptions,
        }),
        userscript(
          path.resolve('src/meta.js'),
          meta => meta
            .replace('process.env.NAME', pkg.name)
            .replace('process.env.DESC', pkg.description)
            .replace('process.env.VERSION', pkg.version)
            .replace('process.env.AUTHOR', pkg.author),
        ),
      ],
    },
    // Output userscripts
    output: {
      file: `${DIST}/${FILENAME}.user.js`,
      format: 'iife',
      ...bundleOptions
    }
    /*
    output: [
    {
      file: `${DIST}/${FILENAME}.user.js`,
      format: 'iife',
      ...bundleOptions
    },
    {
      file: `${DIST}/${RELEASE}.user.js`,
      format: 'iife',
      ...bundleOptions
    }
    ]
    */
  },
];

rollupConfig.forEach((item) => {
  item.output = {
    indent: false,
    // If set to false, circular dependencies and live bindings for external imports won't work
    externalLiveBindings: false,
    ...item.output,
  };
});

module.exports = rollupConfig.map(({ input, output }) => ({
  ...input,
  output,
}));
