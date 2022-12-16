const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())

app.get('/onemap', (req, res) => {
  const tableDable = [
    {
      id : '1',
      road_name : '成华大道',
      length:'442.5',
    },
    {
      id : '2',
      road_name : '物候大道',
      length:'456.5',
    },
    {
      id : '3',
      road_name : '成大道',
      length:'333.5',
    },
  ]
  res.send({
    data: tableDable
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})