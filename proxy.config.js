const proxy = [
  {
    context: '/api/*',
    target: 'http://localhost:52041',
    pathRewrite: {'^/api' : ''},
    secure: false
  }
];
module.exports = proxy;