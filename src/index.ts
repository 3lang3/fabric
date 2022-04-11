const strictEslint = require('./eslint');
const stylelint = require('./stylelint');
const prettier = require('./prettier');

module.exports = {
  stylelint,
  prettier,
  strictEslint,
  default: strictEslint,
};
