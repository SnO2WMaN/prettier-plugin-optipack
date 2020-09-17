const {format} = require('@optipack/core');
const {getConfigSync} = require('@optipack/cosmiconfig');
const {parsers: babelParsers} = require('prettier/parser-babel');

const {'json-stringify': jsonParser} = babelParsers;

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
          ? format(text, getConfigSync(process.cwd()))
          : text;
      },
    },
  },
};
