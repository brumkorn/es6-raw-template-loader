/*
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Aleksey Shovgenia
 */
module.exports = function (content) {
  this.cacheable && this.cacheable();
  this.value = content;
  return `let template = ${JSON.stringify(content)}; export default template;`;
};
module.exports.seperable = true;