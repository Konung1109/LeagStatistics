
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt')
const app = express();
const jwt = require('jsonwebtoken')
const saltRounds = 10;
const schedulePanel = require('./schedulepanel')
const add_delPlayer = require('./statpanel')
const standingPanel = require('./standingpanel')
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
  const { username, password } = req.body; 

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



app.get("/statistics/2023", async (req, res) => {
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
  const data = await add_delPlayer.getData2022()
  res.json(data)
});
app.get("/statistics/2021", async (req, res) => {
  const data = await add_delPlayer.getData2021()
  res.json(data)
});
app.post("/statistics/addPlayer", async (req, res) => {
  const { playerNum, playerName, playerSurname, playerTeam, playerPos, season } = req.body;
  if (!season || !playerName || !playerSurname || !playerNum || !playerTeam || !playerPos) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const data = await add_delPlayer.addPlayer(playerNum, playerName, playerSurname, playerTeam, playerPos, season)
    res.status(200).json(data);
  } catch (err) {
    console.error('Error adding player:', err);
    res.status(500).json({ message: 'Server error' });
  }
})
app.delete("/statistics/delPlayer", async (req, res) => {
  const {season, playerId} = req.body;
  console.log('Request received with:', { season, playerId });

  if (!season || !playerId) {
    return res.status(400).json({message: 'Not received season or ID'});
    
  }
  try {
    const data = await add_delPlayer.delPlayer(season, playerId)
    res.status(200).json(data)
  } catch (err) {
    console.error('Error deleting player:', err);
    res.status(500).json({ message: 'Server error' });
  }
})
app.post("/statistics/addDelTeam", async (req, res) => {
  const {team, action} = req.body;
  if (!team || !action) {
    return res.status(400).json({message: 'Not received team name or action'}); 
  } 
  try {
    const data = await add_delPlayer.addDelTeam(team, action)
    res.status(200).json(data)
  } catch (err) {
    console.error('Error adding team:', err);
    res.status(500).json({ message: 'Server error' });
  }
})
app.delete("/statistics/addDelTeam", async (req, res) => {
  const {team, action} = req.body;
  if (!team || !action) {
    return res.status(400).json({message: 'Not received team name or action'}); 
  } 
  try {
    const data = await add_delPlayer.addDelTeam(team, action)
    res.status(200).json(data)
  } catch (err) {
    console.error('Error deleting team:', err);
    res.status(500).json({ message: 'Server error' });
  }
})
app.post("/statistics/addDelYear", async (req, res) => {
  const {year, action} = req.body;
  if (!year || !action) {
    return res.status(400).json({message: 'Not received year or action'}); 
  } 
  try {
    const data = await add_delPlayer.addDelYear(year, action)
    res.status(200).json(data)
  } catch (err) {
    console.error('Error adding year:', err);
    res.status(500).json({ message: 'Server error' });
  }
})
app.delete("/statistics/addDelYear", async (req, res) => {
  const {year, action} = req.body;
  if (!year || !action) {
    return res.status(400).json({message: 'Not received year or action'}); 
  } 
  try {
    const data = await add_delPlayer.addDelYear(year, action)
    res.status(200).json(data)
  } catch (err) {
    console.error('Error deleting year:', err);
    res.status(500).json({ message: 'Server error' });
  }
})
app.put("/statistics/updatePlayer", async (req, res) => {
  const {updates, season, id} = req.body;
  if (!season || !id) {
    return res.status(400).json({message: 'Not received year or ID'}); 
  } 
  try {
    const data = await add_delPlayer.updatePlayer(updates, season, id)
    res.status(200).json(data)
  } catch (err) {
    console.error('Error in updating player:', err);
    res.status(500).json({ message: 'Server error' });}
  })
  app.post("/statistics/addDelTournament", async (req, res) => {
    const {tournHerb, tournName, tournDate, season, action} = req.body;
    if (!tournHerb || !tournName || !tournDate || !season || !action) {
      return res.status(400).json({message: 'Not received tournament info'}); 
    } 
    try {
      const data = await schedulePanel.addDelTournament(tournHerb, tournName, tournDate, season, action)
      res.status(200).json(data)
    } catch (err) {
      console.error('Error adding tournament:', err);
      res.status(500).json({ message: 'Server error' });
    }
  })
  app.delete("/statistics/addDelTournament", async (req, res) => {
    const {tournHerb, tournName, tournDate, season, action} = req.body;
    if (!tournHerb || !tournName || !tournDate || !season || !action) {
      return res.status(400).json({message: 'Not received tournament info'}); 
    } 
    try {
      const data = await schedulePanel.addDelTournament(tournHerb, tournName, tournDate, season, action)
      res.status(200).json(data)
    } catch (err) {
      console.error('Error deleting tournament:', err);
      res.status(500).json({ message: 'Server error' });
    }
  })
  app.post("/statistics/addDellTeamStanding", async (req, res) => {
    const {team, season, action} = req.body;
    if (!team || !season || !action) {
      return res.status(400).json({message: 'Not received team standing info'}); 
    } 
    try {
      const data = await standingPanel.AddDellTeamStanding(team, season, action)
      res.status(200).json(data)
    } catch (err) {
      console.error('Error adding team standing:', err);
      res.status(500).json({ message: 'Server error' });
    }
  })
  app.delete("/statistics/addDellTeamStanding", async (req, res) => {
    const {team, season, action} = req.body;
    if (!team || !season || !action) {
      return res.status(400).json({message: 'Not received team standing info'}); 
    } 
    try {
      const data = await standingPanel.AddDellTeamStanding(team, season, action)
      res.status(200).json(data)
    } catch (err) {
      console.error('Error deleting team standing:', err);
      res.status(500).json({ message: 'Server error' });
    }
  })
  app.put("/statistics/updateTeamStanding", async (req, res) => {
    const {updates, season} = req.body;
    if (!season) {
      return res.status(400).json({message: 'Not received year'}); 
    } 
    try {
      const data = await standingPanel.updateTeamStanding(updates, season)
      res.status(200).json(data)
    } catch (err) {
      console.error('Error in updating team standing:', err);
      res.status(500).json({ message: 'Server error' });}
    })
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});