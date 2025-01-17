const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '21051998Qw!1',
  database: 'statistics',
}).promise();
module.exports = {
    addDelTournament: async (tournHerb, tournName, tournDate, season, action) => {
        try {
          if (action === 'add' ) {
            const [rows] = await db.query(
              `INSERT INTO bubles${season} (name, logo, bubleDate) VALUES (?, ? ,?)`,
              [tournName, tournHerb, tournDate]
            );
            return rows
          } else if (action === 'del') {
            const [rows] = await db.query(
              `DELETE FROM bubles${season} WHERE bubleDate = ?`,
              [tournDate]
            );
            return rows
          }
        } catch (err) {
          console.error('Failed to delete or add tournament:', err);
          throw err;
        } 
      },
}