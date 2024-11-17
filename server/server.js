
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');


const app = express();
app.use(cors());
app.use(express.json());

// Параметри підключення до бази даних
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '11092003Qw!1',
  database: 'statistics',
}).promise();
async function getData2023() {
  const [rows] = await db.query(`
    SELECT *
    FROM statistics.statistic_data_2022;
    `)
    return rows
  
}
async function getData2022() {
  const [rows] = await db.query(`
    SELECT *
    FROM statistics.statistic_data_2023;
    `)
    return rows
  
}
async function getBubles2023() {
  const [rows] = await db.query(`
    SELECT * FROM statistics.bubles2023;
    `)
    return rows
  
}
async function getData2021() {
  const [rows] = await db.query(`
    SELECT *
    FROM statistics.statistic_data_2021;
    `)
    return rows
  
}

// Перевірка підключення
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

// API для отримання даних
app.get("/statistics/2023", async (req, res) => {
  /*db.query('SELECT * FROM statistic_data_2023', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  })*/
  const data = await getData2023()
  res.json(data)
});
app.get("/statistics/bubles2023", async (req, res) => {
  const data = await getBubles2023()
  
  res.json(data)
})
app.get("/statistics/2022", async (req, res) => {
  /*db.query('SELECT * FROM statistic_data_2023', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  })*/
  const data = await getData2022()
  res.json(data)
});
app.get("/statistics/2021", async (req, res) => {
  /*db.query('SELECT * FROM statistic_data_2023', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  })*/
  const data = await getData2021()
  res.json(data)
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});