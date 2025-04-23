const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

router.post('/postData', (req, res) => {
    const body = req.body;

    console.log("Data : ");
    res.json({
        message: "Data added",
        data: body,
    })
  })

//login
  router.post('/login', (req, res) => {
    const body = req.body;
    const storedlogin = localStorage.setItem(body)
    if(body.email == "jayant@gmail.com" & body.password == "passwordd"){


    console.log("Data : ");
    res.json({
        message: "Login Successful",
    })
} else {
    res.json({
        message: "Invalid credentials"
    })
}
  })

  //register
  router.post('/register', (req, res) => {
    const body = req.body;
    if(body.email == "jayant@gmail.com"){
        res.json({
            message: "User already exists"
    })} else {
        console.log("Data : ");
        res.json({
            message: "Registration Successful",
            data: body,
        })}
  })



module.exports = router