const { GraphQLClient, gql } = require('graphql-request')
const chotot_cate = require("E:/T/DiCho/backend/test/chotot_categories_id.json").entities


const endpoint = 'http://localhost:4000'

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJja25lZWhlbDgwMDAwbjRreGJscjE4bWRiIiwiaWF0IjoxNjE4MjgxMTc0LCJleHAiOjE2MTgzMTcxNzR9.SZWIvEUAbqkDGzLKM-glDIzb07dVzwxw3HmHxnClWpw',
  },
})

const mutation = gql`
mutation Category($id: String!, $title: String!, $slug: String!, $parent: String, $children: String, $type: String) {
  category(input: { id: $id, title: $title, slug: $slug, parent: $parent, children: $children, type: $type }) {
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
  str.split('').reverse().join('').match(/.{1,3}/g).map(x => x.split('').reverse().join('')).reverse()
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
        for (o of value.filter_types) {
          cate = {}
          type = Object.keys(o)[0]
          if (type == 'k') { type = 'S'; cate.type = 'Cần bán' }
          else if (type == 'h') { type = 'T'; cate.type = 'Cho thuê' }
          else if (type == 's') { type = 'B'; cate.type = 'Cần mua' }
          else if (type == 'u') { type = 'R'; cate.type = 'Cần thuê' }
          cateId = strSplitRight(value.id)
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
    addCate(cate).catch((error) => console.error(error))
    await sleep(1000);
    i++
    // if (i>10) break;
  }
}

main()
