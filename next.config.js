/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "@/styles/variables.scss";`,
  },
}

module.exports = nextConfig
