const path = require('path');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
   
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bitmoji-tutorial' : '',
  webpack(config, options) {
     config.resolve.alias = {
       ...config.resolve.alias,
       components: path.resolve(__dirname, 'components/'),
       pages: path.resolve(__dirname, 'pages/')
     }
     return config
  }
})
