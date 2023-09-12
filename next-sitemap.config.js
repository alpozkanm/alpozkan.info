/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL_PROD || 'https://www.alpozkan.info',
    generateRobotsTxt: true, // (optional)
    output: 'public',
    exclude: ['/posts'],
    generateIndexSitemap: false,
    // ...other options
  }