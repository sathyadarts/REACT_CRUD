const express =require ('express')
const mysql =require('mysql')
const cors = require ('cors')
const app= express()
app.use(express.json())
app.use(cors())
app.listen(3500)

const con =mysql.createConnection({
    host: 'localhost',
    user :'root',
    password :'',
    database :'mern1'
})
app.post('/saveemp', function (req,res){
    const name =req.body.name
    const email =req.body.email
    const password =req.body.password
    const gender =req.body.gender
    const age =req.body.age
    con.query ("insert into emp_table(name,email,password,gender,age)values(?,?,?,?,?)", [name,email,password,gender,age],(err,result)=>{
        if (err){
            throw err
        }else{
            res.send("inserted successfully")
        }
    }
    )
})
app.get('/view',function(req,res){
    con.query("SELECT* FROM emp_table",(err,result)=>{
        if(err){
            throw err
        }else{
            res.send(result)
        }
    })
})
app.delete('/deleteEmp/:id', function (req,res){
    const id = req.params.id
    con.query("DELETE FROM emp_table WHERE id=?",[id],(err,result)=>{
        if(err){
            throw err}
            else{
                res.send("deleted succesfully")
            }
        })
    })
    app.get('/read/:id',function(req,res){
        const query="SELECT * FROM emp_table WHERE id=?"
        const id=req.params.id
        con.query(query ,[id],(err,result)=>{
            if (err){
                throw err}
                else{
                    res.send(result)
                }
        })
    })
    app.put('/update/:id',function(req,res){
        const query="UPDATE emp_table SET name=?, email=?, password=?, gender=?, age=? WHERE id=?"
        const id=req.params.id
    
        const name=req.body.nname
        const email=req.body.nemail
        const password=req.body.npassword
        const gender=req.body.ngender
        const age=req.body.nage
    
        con.query(query,[name,email,password,gender,age,id],(err,result)=>{
            if(err){
                throw err
            }else{
                res.send(result)
            }
            })
        })

        
app.put('/update2/:id',function(req,res){
    const query="UPDATE emp_table SET name=?, email=?, password=?, gender=?, age=? WHERE id=?"
    const id=req.params.id

    const name=req.body.nname
    const email=req.body.nemail
    const password=req.body.npassword
    const gender=req.body.ngender
    const age=req.body.nage

    con.query(query,[name,email,password,gender,age,id],(err,result)=>{
        if(err){
            throw err
        }else{
            res.send(result)
        }
    })
})
