const chotot_cate = require("E:/T/DiCho/dev/backend/test/chotot_categories_id.json").entities
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
  result.push(cateParent)
}

console.log(result);
