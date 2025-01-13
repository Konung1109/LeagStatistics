
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt')
const app = express();
const jwt = require('jsonwebtoken')
const saltRounds = 10;
const add_delPlayer = require('./statpanel')
app.use(cors());
app.use(express.json());
const SECRET_KEY = "admin";

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '21051998Qw!1',
  database: 'statistics',
}).promise();


// Перевірка підключення
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});
app.post("/statistics/login", async (req, res) => {
  const { username, password } = req.body; // Отримання даних з тіла запиту

  if (!username || !password) {
    return res.status(400).send({ message: "Please provide username and password" });
  }

  try {
    const [result] = await db.query("SELECT * FROM users WHERE username = ?", [username]);

    if (result.length > 0) {
      const match = await bcrypt.compare(password, result[0].password);

      if (match) {
        const token = jwt.sign({id: result[0].id, username: result[0].username}, SECRET_KEY, { expiresIn: "1h" })
        return res.status(200).send({ message: "Login successful", token});
      } else {
        return res.status(401).send({ message: "Wrong username/password" });
      }
    } else {
      return res.status(404).send({ message: "User doesn't exist" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: "Server error" });
  }
});


// API для отримання даних
app.get("/statistics/2023", async (req, res) => {
  /*db.query('SELECT * FROM statistic_data_2023', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  })*/
  const data = await add_delPlayer.getData2023()
  res.json(data)
});
app.get("/statistics/bubles", async (req, res) => {
  const {sId} = req.query;
  const data = await add_delPlayer.getBubles(sId)
  res.json(data)
})
app.get("/statistics/filters_year", async (req, res) => {
  const data = await add_delPlayer.getYears()
  res.json(data)
})
app.get("/statistics/seasonstanding2023", async (req, res) => {
  const data = await add_delPlayer.getSeasonGamesStatistic()
  res.json(data)
})
app.get("/statistics/bublegames", async (req, res) => {
  const {bId} = req.query;
  const {season} = req.query;
  const data = await add_delPlayer.getBublesGames(bId, season)
  
  res.json(data)
})
app.post("/statistics/find-player", async (req, res) => {
  const { season, playerName, playerSurname } = req.body;
  
  if (!season || !playerName || !playerSurname) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const data = await add_delPlayer.findPlayer(season, playerName, playerSurname);
    if (data.length === 0) {
      return res.status(404).json({ message: 'Player not found' });
    }
    res.status(200).json(data);
  } catch (err) {
    console.error('Error finding player:', err);
    res.status(500).json({ message: 'Server error' });
  }
})
app.get("/statistics/2022", async (req, res) => {
  /*db.query('SELECT * FROM statistic_data_2023', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  })*/
  const data = await add_delPlayer.getData2022()
  res.json(data)
});
app.get("/statistics/2021", async (req, res) => {
  /*db.query('SELECT * FROM statistic_data_2023', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  })*/
  const data = await add_delPlayer.getData2021()
  res.json(data)
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});