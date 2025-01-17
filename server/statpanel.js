const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '21051998Qw!1',
  database: 'statistics',
}).promise();

module.exports = {
    getData2023: async () => {
        const [rows] = await db.query(`
          SELECT *
          FROM statistics.statistic_data_2023;
          `)
          return rows
        
      },
      getData2022: async () => {
        const [rows] = await db.query(`
          SELECT *
          FROM statistics.statistic_data_2022;
          `)
          return rows
        
      },
      getBubles: async (id) => {
        const [rows] = await db.query(`
          SELECT * FROM statistics.bubles${id};
          `)
          return rows
        
      },
      getYears: async () => {
        const [rows] = await db.query(`
          SELECT * FROM statistics.filters_year;
          `)
          return rows
        
      },
      getBublesGames: async (id, season) => {
        const [rows] = await db.query(`
          SELECT * FROM statistics.bublegames${season} WHERE bubleInd = ${id};
          `)
          return rows
        
      },
      getSeasonGamesStatistic: async () => {
        const [rows] = await db.query(`
          SELECT * 
          FROM statistics.seasonstanding2023
          ORDER BY wins DESC, run_difference DESC;
          `)
          return rows
      },
      getData2021: async () => {
        const [rows] = await db.query(`
          SELECT *
          FROM statistics.statistic_data_2021;
          `)
          return rows
        
      },
      findPlayer: async (season, playerName, playerSurname) => {
        try {
          const [rows] = await db.query(
            `SELECT * FROM statistics.statistic_data_${season} WHERE fname = ? AND surname = ?`,
            [playerName, playerSurname]
          );
          return rows;
        } catch (err) {
          console.error('Error in findPlayer:', err);
          throw err;
        }
      },
      addPlayer: async (playerNum, playerName, playerSurname, playerPos,playerTeam, season) => {
        try {
          const [rows] = await db.query(
            `INSERT INTO statistic_data_${season} (numb, fname, surname, team, pos, games, ab, r, h, secb, thirtb, hr, rbi, bb, k, avgg, obp, barsp, fteam) 
             VALUES (?, ?, ?, '', ?, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ?);`, 
             [playerNum, playerName, playerSurname, playerPos, playerTeam]
          );
          return rows;
        } catch (err) {
          console.error('Error in addind new player:', err);
          throw err;
        }
      },
      delPlayer: async (season, playerId) => {
        try {
          const [rows] = await db.query(
          `DELETE FROM statistics.statistic_data_${season} WHERE id = ?`, 
          [playerId]
          );
          return rows;
        } catch (err) {
          console.error('Failed to delete player:', err);
          throw err;
        }
      },
      addDelTeam: async (team, action) => {
        try {
          if (action === 'add' ) {
            const [rows] = await db.query(
              `INSERT INTO filters_teams (team) VALUES (?)`,
              [team]
            );
            return rows
          } else if (action === 'del') {
            const [rows] = await db.query(
              `DELETE FROM filters_teams WHERE team = ?`,
              [team]
            );
            return rows
          }
        } catch (err) {
          console.error('Failed to delete or add team:', err);
          throw err;
        } 
      },
      addDelYear: async (year, action) => {
        try {
          if (action === 'add' ) {
            const [rows] = await db.query(
              `INSERT INTO filters_year (year) VALUES (?)`,
              [year]
            );
            return rows
          } else if (action === 'del') {
            const [rows] = await db.query(
              `DELETE FROM filters_year WHERE year = ?`,
              [year]
            );
            return rows
          }
        } catch (err) {
          console.error('Failed to delete or add year:', err);
          throw err;
        } 
      },
      updatePlayer: async (updates, season, id) => {
        try {
          const fields = [];
          const values = [];
          for (const [key, value] of Object.entries(updates)) {
            if (value !== undefined && value !== null) {
              fields.push(`${key} = ?`);
              values.push(value);
            }
          }
          if (fields.length === 0) {
            throw new Error('No fields to update');
          }
          values.push(id);
          const query = `
            UPDATE statistic_data_${season}
            SET ${fields.join(', ')}
            WHERE id = ?;
          `;
      
          const [rows] = await db.query(query, values);
          return rows;
        } catch (err) {
          console.error('Error updating player:', err);
          throw err;
        }
      }
};
