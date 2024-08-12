const express = require('express');

const app = express();

//router

const port = 8000;
//middle
app.use(express.json());


let users = [
  {  
    id : 1,
    name: "carte",
    age : 14,
  },

  { 
    id : 2,
    name: "mohammed",
    age : 25,
  },
 

]

app.get('/', (req, res) => {
     res.send("welcome");
})

app.get('/users', (req, res) => {
   res.json(users)
})


//post

app.post('/regester-user', (req, res) => {

  console.log("body info", req.body);

  const newUser = {
    id: users.length + 1,
    name : req.body.name,
    age : req.body.age,

  };

  users.push(newUser);
//error one object miss
  res.status(201).json(users);

})


//delete

app.get('/test', (req, res)=>{

  res.send("hey carte you")

})

app.delete('/delete/:id', (req, res)=>{


  const deleteUser = req.params.id;

  users =  users.filter((user) => user.id != deleteUser);

  res.json(users);


})


//port
app.listen(port, function(req, res){
  console.log(`app is listen on  ${port}`);
})