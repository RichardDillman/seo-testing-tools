// There are multiple types of Article but they are identical in terms of core fields
const _articlePrototype = (schema) => {
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
      { test: `${schema}[*].author."@id"`, expect: "https://www.themuse.com#identity", description: "Must have n author id." },
      { test: `${schema}[*].copyrightHolder."@id"`, expect: "https://www.themuse.com#identity", description: "Must have a copyrightHolder id." },
      { test: `${schema}[*].copyrightYear`, description: "Must have a copyrightYear." }, 
      { test: `${schema}[*].creator."@id"`, expect: "https://www.themuse.com#creator", description: "Must have a creator." },
      { test: `${schema}[*].datePublished`, description: "Must have a site name." },
      { test: `${schema}[*].description`, description: "Must have a description." },
      { test: `${schema}[*].headline`, description: "Must have a headline." },
      { test: `${schema}[*].image`, description: "Must have a an image." },
      { test: `${schema}[*].image."@type"`, expect: "ImageObject", description: "Must have an image.url."  },
      { test: `${schema}[*].image.url`, description: "Must have a site name." },
      { test: `${schema}[*].inLanguage`, description: "Must have a language." },
      { test: `${schema}[*].mainEntityOfPage`, description: "Must have a mainEntityOfPage." }, 
      { test: `${schema}[*].name`, description: "Must have a name." },
      { test: `${schema}[*].publisher`, description: "Must have a publisher." },
      { test: `${schema}[*].url`, description: "Must have a url." },

      // Warnings from Google
      { test: `${schema}[*].dateModified`, warning: true, description: "Should have a dateModified." }
    ]
  }
}

// Several article types have identical, minimal requirements
const _simpleArticlePrototype = (schema) => {
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
      // Warnings from Google
      { test: `${schema}[*].headline`, warning: true },
      { test: `${schema}[*].image`, warning: true },
    ]
  }
}
const Article = {
  ..._articlePrototype('Article'),
  description: 'An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many different types and this is intended to cover them all.'
}

module.exports = {
  _articlePrototype,
  _simpleArticlePrototype,
  Article
}