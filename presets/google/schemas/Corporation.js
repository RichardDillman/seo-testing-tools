const _corporationPrototype = (schema) => {
    return {
      name: schema,
      schema,
      conditional: {
        test: schema 
      },
      tests: [
        // Expected by Google
        { test: `${schema}` },
        { test: `${schema}[*]."@type"`, expect: schema },
        // identity
        { test: `${schema}[0]."@id"`, expect: "https://www.themuse.com#identity", description: "Must have an identity." },
        { test: `${schema}[*].address`, description: 'Must have an address', description: "Must have an identity address." },
        { test: `${schema}[*].address."@type"`, expect: "PostalAddress", description: "Must have an identity PostalAddress type." },
        { test: `${schema}[*].address.addressCountry`, expect: "US", description: "Must have an identity country address." },
        { test: `${schema}[*].address.addressLocality`, expect: "New York", description: "Must have an identity locality address." },
        { test: `${schema}[*].address.addressRegion`, expect: "NY", description: "Must have an identity region address." },
        { test: `${schema}[*].address.postalCode`, expect: "10018", description: "Must have an identity code address." },
        { test: `${schema}[*].address.streetAddress`, expect: "1375 Broadway", description: "Must have an identity street address." },
        { test: `${schema}[*].email`, expect: "press@themuse.com", description: "Must have an email address." },
        { test: `${schema}[*].founder`, expect: "Kathryn Minshew & Alexandra Cavoulacos", description: "Must have a founder name." },
        { test: `${schema}[*].name`, expect: "The Muse", description: "Must have a site name." },
        { test: `${schema}[*].url`, expect: "https://www.themuse.com", description: "Must have a site url." },
        // Creator
        { test: `${schema}[1]."@id"`, expect: "https://www.themuse.com#creator", description: "Must have a creator." },
        { test: `${schema}[0].sameAs[0]`, warning: true, expect:'https://www.twitter.com/dailymuse', description: "Must have a same as for Twitter." },
        { test: `${schema}[0].sameAs[1]`, warning: true, expect:'https://www.facebook.com/thedailymuse', description: "Must have a same as for Facebook." },
        { test: `${schema}[0].sameAs[2]`, warning: true, expect:'https://en.wikipedia.org/wiki/The_Muse_(website)', description: "Must have a same as for wikipedia." },
        { test: `${schema}[0].sameAs[3]`, warning: true, expect:'https://www.linkedin.com/company/the-daily-muse', description: "Must have a same as for LinkedIn." },
        { test: `${schema}[0].sameAs[4]`, warning: true, expect:'https://www.youtube.com/channel/UCk4bbQAZD26f_XdGyb4wwhg', description: "Must have a same as for Youtube." },
        { test: `${schema}[0].sameAs[5]`, warning: true, expect:'https://instagram.com/themuse/', description: "Must have a same as for Instagram." },
        { test: `${schema}[0].sameAs[6]`, warning: true, expect:'https://pinterest.com/thedailymuse/', description: "Must have a same as for Pinterest." },
      ]
    }
  }
  
  const Corporation = {
    ..._corporationPrototype('Corporation'),
    description: 'Organization: A business corporation.'
  }
  
  module.exports = {
    _corporationPrototype,
    Corporation
  }