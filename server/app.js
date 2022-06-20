const express = require("express");
const app = express();
const port = 3003;
const cors = require("cors");
app.use(cors());
const mysql = require("mysql");
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "lama",
});

//Routes
////READ
//app.get("/medziai", (req, res) => {
//    const sql = `
//  SELECT
//  *
//  FROM trees
//`;
//    con.query(sql, (err, result) => {
//        if (err) throw err;
//        res.send(result);
//    });
//});
////CREATE
//// INSERT INTO table_name (column1, column2, column3, ...)
//// VALUES (value1, value2, value3, ...);
//app.post("/medziai", (req, res) => {
//    const sql = `
//INSERT INTO trees
//(type, title, height)
//VALUES (?, ?, ?)
//`;
//    con.query(sql, [req.body.type, req.body.title, req.body.height], (err, result) => {
//        if (err) throw err;
//        res.send({ result, msg: { text: 'OK, Zuiki', type: 'success' } });
//    });
//});
//
////DELETE
//// DELETE FROM table_name WHERE condition;
//app.delete("/medziai/:treeId", (req, res) => {
//    const sql = `
//DELETE FROM trees
//WHERE id = ?
//`;
//    con.query(sql, [req.params.treeId], (err, result) => {
//        if (err) throw err;
//        res.send({ result, msg: { text: 'OK, Bebrai', type: 'info' } });
//    });
//});
//
////EDIT
//// UPDATE table_name
//// SET column1 = value1, column2 = value2, ...
//// WHERE condition;
//app.put("/medziai/:treeId", (req, res) => {
//    const sql = `
//    UPDATE trees
//    SET title = ?, type = ?, height = ?
//    WHERE id = ?
//`;
//    con.query(sql, [req.body.title, req.body.type, req.body.height, req.params.treeId], (err, result) => {
//        if (err) throw err;
//        res.send({ result, msg: { text: 'OK, Barsukai', type: 'danger' } });
//    });
//});
//
//
//app.listen(port, () => {
//    console.log(`Bebras klauso porto Nr ${port}`);
//});
//

//*****************************KOLT****************************************************

//Routes
//READ
app.get("/paspirtukai", (req, res) => {
    const sql = `
  SELECT
  *
  FROM kolt
`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
//CREATE
// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);
app.post("/paspirtukai", (req, res) => {
    const sql = `
INSERT INTO kolt
(code, km, time, isbusy)
VALUES (?, ?, ?, ?)
`;
    con.query(sql, [req.body.code, req.body.km, req.body.time, req.body.isbusy], (err, result) => {
        if (err) throw err;
        res.send({ result, msg: { text: 'OK, Zuiki', type: 'success' } });
    });
});

//DELETE
// DELETE FROM table_name WHERE condition;
app.delete("/paspirtukai/:koltId", (req, res) => {
    const sql = `
DELETE FROM kolt
WHERE id = ?
`;
    con.query(sql, [req.params.koltId], (err, result) => {
        if (err) throw err;
        res.send({ result, msg: { text: 'OK, Bebrai', type: 'info' } });
    });
});

//EDIT
// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;
app.put("/paspirtukai/:koltId", (req, res) => {
    const sql = `
    UPDATE kolt
    SET code = ?, km = ?, time = ?, isbusy = ?
    WHERE id = ?
`;
    con.query(sql, [req.body.code, req.body.km, req.body.time, req.body.isbusy, req.params.treeId], (err, result) => {
        if (err) throw err;
        res.send({ result, msg: { text: 'OK, Barsukai', type: 'danger' } });
    });
});


app.listen(port, () => {
    console.log(`Bebras klauso porto Nr ${port}`);
});

