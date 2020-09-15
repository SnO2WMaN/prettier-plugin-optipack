const prettier = require('prettier');
const {readFileSync} = require('fs');
const {resolve} = require('path');

describe('sort', () => {
  it('1', () => {
    const expected = readFileSync(
      resolve(__dirname, 'fixtures', '1_expected.json'),
      'utf8',
    );
    const code = readFileSync(resolve(__dirname, 'fixtures', '1.json'), 'utf8');
    const actual = prettier.format(code, {
      parser: 'json-stringify',
      filepath: 'package.json',
      plugins: ['.'],
    });

    expect(actual).toBe(expected);
  });
});
