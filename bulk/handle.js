const json = require('./animal.json')
const fs = require('fs')
const elasticsearch = require('elasticsearch')

const body = []
json.forEach((value, key) => {
  body.push({ index: { _index: 'store', _type: 'animal', _id: key } })
  body.push(value)
})

const client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
})

client.bulk({ body })
.then(res => console.log(res))
.catch(err => console.error(err))

