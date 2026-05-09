const express = require('express')
const router =express.Router()
router.get('/',(req,res)=>{
res.send ("User list")
})

router.get('/new',(req,res)=>{
res.send ("User New form")
})

router.post('/',(req,res)=>{
    res.send ('Create User')
})
router
.route("/:id")
.get((req,res)=>{
    res.send(`Get User With ID ${req.params.id}`)
})
.put((req,res)=>{
    res.send(`Update User With ID ${req.params.id}`)
})
.delete((req,res)=>{
    res.send(`Delete User With ID ${req.params.id}`)
})


module.exports = router;