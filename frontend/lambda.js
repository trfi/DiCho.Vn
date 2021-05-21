export default {
  getSignedURL(file) {
    const endpoint =
      'https://pa360zotxj.execute-api.ap-southeast-1.amazonaws.com/GetSignedURL'
    console.log(file)
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
  },
  objectId() {
    function hex(value) {
      return Math.floor(value).toString(16)
    }
    return (
      hex(Date.now() / 1000) +
      ' '.repeat(16).replace(/./g, () => hex(Math.random() * 16))
    )
  },
}
