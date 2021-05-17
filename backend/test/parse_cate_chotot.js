const { GraphQLClient, gql } = require('graphql-request')
const chotot_cate = require("./chotot_categories_id.json").entities


const endpoint = 'http://localhost:4000'

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYTEyOTZhZjYwMTUwOWE0MDc2Njk5OCIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYyMTE3NDYzNywiZXhwIjoxNjI4OTUwNjM3fQ.ykP2p-j5PnR_TmLRIm7-WyROtXrV7ABZWFfIH8h3jmA',
  },
})

const mutation = gql`
mutation Category($id: String!, $title: String!, $slug: String!, $parent: String, $children: String, $types: [Type]) {
  addCategory(input: { id: $id, title: $title, slug: $slug, parent: $parent, children: $children, types: $types }) {
    id
    title
  }
}
`

async function addCate(variable) {
  const data = await graphQLClient.request(mutation, variable)
  console.log(JSON.stringify(data, undefined, 2))
}

function strSplitRight(str) {
  return str.split('').reverse().join('').match(/.{1,3}/g).map(x => x.split('').reverse().join('')).reverse()
}

function parseCate() {
  const result = []

  for (const [key, parentValue] of Object.entries(chotot_cate)) {
    const sub = parentValue.subCategories.entities
    
    cateParent = {}
    cateId = strSplitRight(parentValue.id)
    parentCateId = cateId[0].length == 1 ? '0' + cateId[0] : cateId[0]
    cateParent.id = parentCateId
    cateParent.title = parentValue.name
    cateParent.slug = parentValue.name_url
    cateParent.children = []

    for (const [key, value] of Object.entries(sub)) {
      if (1) {
        types = []
        for (o of value.filter_types) {
          type = Object.keys(o)[0]
          if (type == 'k') types.push('S')
          else if (type == 'h') types.push('T')
          else if (type == 's') types.push('B')
          else if (type == 'u') types.push('R')
        }
        cate = {}
        cateId = strSplitRight(value.id)
        parentCateId = cateId[0].length == 1 ? '0' + cateId[0] : cateId[0]
        subCateId = cateId[1].substring(0, 2)
        cate.id = parentCateId + subCateId
        cate.title = value.name
        cate.slug = value.name_url
        cate.parent = parentCateId
        result.push(cate)
        cate.types = types
        cateParent.children.push(cate.id.substring(0, 4))
      }
    }
    cateParent.children = JSON.stringify(cateParent.children)
    result.push(cateParent)
  }
  // console.log(result);
  return result
}

const data = {
  id: "0102R",
  title: "Bán nhà ở",
  slug: "ban-can-ho-chung-cu",
  parent: "01"
}
let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
cateParsed = parseCate()

async function main() {
  let i = 1
  for (cate of cateParsed) {
    console.log(cate);
    console.log(i);
    addCate(cate).catch((error) => console.error(error))
    await sleep(1000);
    i++
    // if (i>10) break;
  }
}

main()
