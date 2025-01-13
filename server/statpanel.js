const mysql = require('mysql2');

// Підключення до бази даних
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '21051998Qw!1',
  database: 'statistics',
}).promise();

// Експорт функцій із запитами
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
      }
};
