// See https://developer.twitter.com/ for latest documentation
const Twitter = {
  name: 'Twitter',
  description: 'Suggested metatags for Twitter',
  tests: [
    // Expected by const Twitter
    { test: `"twitter:card"`, type: 'metatag', description: 'Must have a card type.' },
    { test: `"twitter:title"`, type: 'metatag', description: 'Must have a title.' },
    { test: `"twitter:description"`, type: 'metatag', description: 'Must have a description.' },
    { test: `"twitter:image" || "twitter:image:src"`, type: 'metatag', description: 'Must have the image url.' },
    { test: `"twitter:image:width"`, type: 'metatag', description: 'Must have the image width.' },
    { test: `"twitter:image:height"`, type: 'metatag', description: 'Must have the image height.' },
    { test: `"twitter:site"`, type: 'metatag', description: 'Must have account the username.' },
    { test: `"twitter:creator"`, type: 'metatag', description: 'Must have username of content creator.' },
    // Optional but highly recommended by Twitter
    { test: `"twitter:image:alt"`, type: 'metatag', warning: true, description: 'Should have image alt text.' }
  ],
}

module.exports = {
  Twitter
}