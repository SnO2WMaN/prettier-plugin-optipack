const {format, defaultConfig} = require('@optipack/core');
const {cosmiconfigSync} = require('cosmiconfig');
const {parsers: babelParsers} = require('prettier/parser-babel');

const {'json-stringify': jsonParser} = babelParsers;

function getConfig(pwd) {
  const explorer = cosmiconfigSync('optipack');
  return {
    ...(explorer.search(pwd) ? explorer.search(pwd).config : {}),
    ...defaultConfig,
  };
}
module.exports = {
  parsers: {
    'json-stringify': {
      ...jsonParser,
      preprocess(text, options) {
        // eslint-disable-next-line no-param-reassign
        text = jsonParser.preprocess
          ? jsonParser.preprocess(text, options)
          : text;
        return /(^|\\|\/)package.json$/.test(options.filepath)
          ? format(text, getConfig(process.cwd()))
          : text;
      },
    },
  },
};
