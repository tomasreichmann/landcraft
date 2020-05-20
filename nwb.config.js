module.exports = {
  type: 'react-app',
  webpack: {
    rules: {
      svg: {
        loader: 'react-svg-inline-loader',
        options: {classPrefix: true}
      }
    }
  }
}
