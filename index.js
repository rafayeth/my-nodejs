const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('hellow mama i wahere r you !!!!')
})

const users = [
    {id:1,name:"Sabana",email: 'sabana@gmail.com',phone: "071121212"},
    {id:2,name:"Sabnur",email: 'sabanur@gmail.com',phone: "071121212"},
    {id:3,name:"Sucorita",email: 'sucoria@gmail.com',phone: "071121212"},
    {id:4,name:"Samantha",email: 'samantha@gmail.com',phone: "071121212"},
    {id:5,name:"Suconda",email: 'suconda@gmail.com',phone: "071121212"},
    {id:6,name:"Sraboni",email: 'sraboni@gmail.com',phone: "071121212"},
    {id:7,name:"Sadia",email: 'sadia@gmail.com',phone: "071121212"},
    {id:8,name:"sabnam",email: 'sabnum@gmail.com',phone: "071121212"},
  
]



app.get('/users',(req,res)=>{

    if(req.query.name){
    const search = req.query.name.toLocaleLowerCase()
    const mathched= users.filter(user=>user.name.toLocaleLowerCase.includes(search))
    res.send(mathched)
    }
    else{
        res.send(users)
    }
 



})
app.get('/user/:id',(req,res)=>{
    console.log(req.params)
    const id = req.params.id
    const user = users.find(u=>u.id=== id)
    res.send(user)
})


app.post('/user',(req,res)=>{
  console.log( 'request', req.body)

  const user = req.body;
  user.id = users.length+1
  users.push(user)
  res.send(user)

})

app.listen(port,()=>{
    console.log('Listening to Port',port)
})