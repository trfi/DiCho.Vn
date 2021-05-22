export function getSignedURL(file) {
  const endpoint =
    'https://pa360zotxj.execute-api.ap-southeast-1.amazonaws.com/GetSignedURL'
  const payload = {
    filePath: file.path,
    contentType: file.type,
  }
  return fetch(endpoint, {
    method: 'post',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((res) => Promise.resolve(res.uploadURL || '/'))
    .catch((err) => {
      console.error(err)
      return Promise.reject('/')
    })
}

export function objectId() {
  function hex(value) {
    return Math.floor(value).toString(16)
  }
  return (
    hex(Date.now() / 1000) +
    ' '.repeat(16).replace(/./g, () => hex(Math.random() * 16))
  )
}

export function slug(str, separator) {
  str = str
    .toLowerCase()
    .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
    .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
    .replace(/ì|í|ị|ỉ|ĩ/g, 'i')
    .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
    .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
    .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
    .replace(/đ/g, 'd')
    .replace(/\s+/g, '-')
    .replace(/[^A-Za-z0-9_-]/g, '')
    .replace(/-+/g, '-')
  if (separator) {
    return str.replace(/-/g, separator)
  }
  return str
}
