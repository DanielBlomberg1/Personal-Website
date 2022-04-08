const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body


//create a todo

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
});


app.post("/todo", async (req, res) => {
  try {
    const { description } = req.body;
    console.log("desc = ",description);
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all todos

app.get("/todo", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a todo

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id
    ]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo

app.put("/todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json("Todo was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo

app.delete("/todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});


app.get("/api/getclicks", async(req, res) =>{
  try{
    const currentclick = await pool.query("SELECT description FROM click");
    res.json(currentclick.rows);
  } catch(err){
    console.log(err.message);
  }
});

app.put("/api/updateclicks", async(req, res) =>{
  try{
    const clickamount = Object.values(req?.body);
    const query = "UPDATE click SET description = "+ clickamount +" WHERE click_id = 0";
    const currentclick = await pool.query(query);
    res.json("clicks updated to " + clickamount + " successfully");
  } catch(err){
    console.log(err.message);
  }
});


app.listen(5000, () => {
  console.log("server has started on port 5000");
});