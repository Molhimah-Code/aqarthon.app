const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    clean: true
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  externals: {
    // Don't bundle node_modules for server-side code
  },
  optimization: {
    minimize: false // Keep readable for debugging
  }
};
