// Based on properties as described at http://ogp.me


// "https://pinterest.com/thedailymuse/"
// "https://instagram.com/themuse/"
// "https://www.youtube.com/channel/UCk4bbQAZD26f_XdGyb4wwhg"
// "https://www.linkedin.com/company/the-daily-muse"
// "https://en.wikipedia.org/wiki/The_Muse_(website)"
// "https://www.facebook.com/thedailymuse"
// "https://www.twitter.com/dailymuse"


const Facebook = {
  name: 'Facebook',
  description: 'Suggested metatags for Facebook',
  tests: [
    // Expected by Facebook
    { test: `"og:title"`, type: 'metatag', description: 'Must have a page title.' },
    { test: `"og:type"`, type: 'metatag', description: 'Must have a page type.' },
    { test: `"og:url"`, type: 'metatag', description: 'Must have a url.' },
    { test: `"og:image" || "og:image:src"`, type: 'metatag', description: 'Must have an image url.' },
    { test: `"og:image:width"`, type: 'metatag', description: 'Must have an image width.' },
    { test: `"og:image:height"`, type: 'metatag', description: 'Must have an image height.' },
    { test: `"og:description"`, type: 'metatag', description: 'Must have a page description.' },
    { test: `"og:site_name"`, type: 'metatag',  description: 'Must have a site name.' },
    { test: `"og:locale"`, type: 'metatag', description: 'Must have a locale.' },
    // Optional but highly recommended by Facebook
    { test: `"og:image:alt"`, type: 'metatag', warning: true, description: 'Should have an image alt text.' },
  ],
}

module.exports = {
  Facebook
}