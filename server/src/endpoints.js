const users = require('./seed-data/users')
const assessment = require('./seed-data/assessment')
const feedback = require('./seed-data/feedback')

// todo: implement persistence
const reviews = {}
users.forEach(u => reviews[String(u.id)] = assessment)

// todo: replace header check with auth
function routes (app) {
  app.get('/users', (req, res) => {
    res.send(users)
  })
  
  app.get('/reviews', (req, res) => {
    // todo: auth and err handling
    const userid = req.headers.userid
    res.send(reviews[userid])
  })
  
  app.put('/reviews', (req, res) => {
    // todo: auth and err handling
    const userid = req.headers.userid
    reviews[userid] = req.body
    res.send(reviews[userid])
  })

  app.get('/reviews/feedback', (req, res) => {
    // todo: auth and err handling
    const userid = req.headers.userid
    res.send(feedback[userid] || [])
  })

  // cleanup
  app.post('/reviews/:userid/feedback', (req, res) => {
    const targetUserid = req.params.userid
    const data = req.body
    data.from = users.find(u => u.id == data.from).name
    feedback[targetUserid].push(data)
    
    res.send(feedback[targetUserid] || [])
  })
}

module.exports = routes
