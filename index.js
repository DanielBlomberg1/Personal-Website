const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db.js")

//middleware
app.use(cors);
app.use(express.json())

  //         //
 // ROUTES //
//        //

app.post("/todo", async(req, res) => {
    try{
        const {description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1)", [description]);
        res.json(newTodo.rows[0]);

    } catch(err){
        console.error(err.message);
    }
});

app.get("/todo", async(req, res)=>{
    try{
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    }catch(err){
        consoler.error(err.message);
    }
})

app.get("/todo/:id", async(req, res) =>{
    console.log("wtf");
    try{
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res = todo;
        console.log(req.params);
    } catch(err){
        console.log(err.message);
    }
})


app.listen(5000, () =>{
    console.log("server started on port 5000");
});

