const { GraphQLClient, gql } = require('graphql-request')
const chotot_cate = require("D:/T/DiCho/prisma2/backend/test/chotot_categories_id.json").entities


const endpoint = 'http://localhost:4000'

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJja25lZWhlbDgwMDAwbjRreGJscjE4bWRiIiwiaWF0IjoxNjE4MjIwMTI5LCJleHAiOjE2MTgyNTYxMjl9.fn74nnEjcDBZb89s_CY5dOIi1jHuHZP9b4gDscxHLyc',
  },
})

const mutation = gql`
mutation Category($id: String!, $title: String!, $slug: String!, $parent: String, $children: String) {
  category(input: { id: $id, title: $title, slug: $slug, parent: $parent, children: $children }) {
    id
    title
  }
}
`


async function addCate(variable) {
  const data = await graphQLClient.request(mutation, variable)
  console.log(JSON.stringify(data, undefined, 2))
}

function parseCate() {
  const result = []

  for (const [key, parentValue] of Object.entries(chotot_cate)) {
    const sub = parentValue.subCategories.entities
    
    cateParent = {}
    cateId = parentValue.id.split('').reverse().join('').match(/.{1,3}/g).map(x => x.split('').reverse().join('')).reverse()
    parentCateId = cateId[0].length == 1 ? '0' + cateId[0] : cateId[0]
    cateParent.id = parentCateId
    cateParent.title = parentValue.name
    cateParent.slug = parentValue.name_url
    cateParent.children = []

    for (const [key, value] of Object.entries(sub)) {
      if (1) {
        for (o of value.filter_types) {
          type = Object.keys(o)[0]
          if (type == 's') type = 'B'
          else if (type == 'u') type = 'R'
          else if (type == 'k') type = 'S'
          else if (type == 'h') type = 'T'
          cate = {}
          cateId = value.id.split('').reverse().join('').match(/.{1,3}/g).map(x => x.split('').reverse().join('')).reverse()
          parentCateId = cateId[0].length == 1 ? '0' + cateId[0] : cateId[0]
          subCateId = cateId[1].substring(0, 2)
          cate.id = parentCateId + subCateId + type
          cate.title = value.name
          cate.slug = value.name_url
          cate.parent = parentCateId
          result.push(cate)
        }
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
    // console.log(cate);  
    console.log(i);
    console.log(cate.id);
    addCate(cate).catch((error) => console.error(error))
    await sleep(1000);
    i++
    if (i>1) break;
  }
}

main()
