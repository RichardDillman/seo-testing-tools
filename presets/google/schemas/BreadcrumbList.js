// There are multiple types of Article but they are identical in terms of core fields
const _breadcrumbListPrototype = (schema) => {
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
        { test: `${schema}[*].description`, description: "Must have a description." },
        { test: `${schema}[*].name`, description: "Must have a name." },
        { test: `${schema}[*].itemListElement`, description: "Must have an itemListElement." },
        { test: `${schema}[*].itemListElement[0]."@type"` },
        { test: `${schema}[*].itemListElement[0].position`, expect: "1", description: "Must have a position of 1." },
        { test: `${schema}[*].itemListElement[0].item`, description: "Must have a crumb." },
        { test: `${schema}[*].itemListElement[0].item."@id"`, expect: "https://www.themuse.com", description: "The first crumb must have an item url of https://www.themuse.com."  },
        { test: `${schema}[*].itemListElement[0].item.name`, expect: "Homepage", description: "The first crumb must have an item name of Homepage." },
      ]
    }
  }
  
  const BreadcrumbList = {
    ..._breadcrumbListPrototype('BreadcrumbList'),
    description: 'A BreadcrumbList is an ItemList consisting of a chain of linked Web pages, typically described using at least their URL and their name, and typically ending with the current page.'
  }
  
  module.exports = {
    _breadcrumbListPrototype,
    BreadcrumbList
  }