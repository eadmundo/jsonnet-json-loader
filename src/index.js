import jsonnetExec from 'jsonnet-exec';

module.exports = function(content) {
  const cb = this.async();
  this.cacheable && this.cacheable();

  jsonnetExec.exec(this.resourcePath, (err, stdout, stderror) => cb(null, stdout));
};