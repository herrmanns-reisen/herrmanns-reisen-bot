const fetch = require('node-fetch')

const gist = content => ({
  'description': 'a gist for a user with token api call via ajax',
  'public': true,
  'files': {
    'file2.txt': {
      'content': content
    }
  }
})

const createGist = () => fetch('https://api.github.com/gists', {
  method: 'POST',
  headers: {
    'Authorization': 'token 957be71cfed272b45a45f57ca71f7c89055760a9'
  },
  body: JSON.stringify(gist('creation'))
})
.then(res => console.log(res))
.catch(err => console.log(err))

const updateGist = (options, file) => fetch(`https://api.github.com/gists/${options.gistId}`, {
  method: 'PATCH',
  headers: {
    'Authorization': `token ${options.token}`
  },
  body: JSON.stringify({
    files: {
      [file.fileName]: {
        content: JSON.stringify(file.content, null, 2)
      }
    }
  })
})
.then(console.log(`successfully uploaded ${file.fileName} to https://gist.github.com/${options.gistId}`))

module.exports = updateGist
