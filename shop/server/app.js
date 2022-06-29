const express = require('express')
const app = express()
const port = 3003

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
  database: "la_ma_shop",
});

//READ
app.get("/admin/cats", (req, res) => {
  const sql = `
SELECT
*
FROM cats
ORDER by title
`;
  con.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
  });
});

//CREATE
//CATS
// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);
app.post("/admin/cats", (req, res) => {
    const sql = `
INSERT INTO cats
(title)
VALUES (?)
`;
    con.query(sql, [req.body.title], (err, result) => {
        if (err) throw err;
        res.send({ result, msg: { text: 'OK, new cat was created', type: 'success' } });
    });
});
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log('Bebras klauso porto Nr. ${port}')
});