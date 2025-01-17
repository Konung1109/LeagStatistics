const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '21051998Qw!1',
  database: 'statistics',
}).promise();
module.exports = {
    AddDellTeamStanding: async (team, season, action) => {
        try {
          if (action === 'add' ) {
            const [rows] = await db.query(
              `INSERT INTO seasonstanding${season} (team_name, wins, losses, matches_played, runs_scored, runs_allowed, run_difference) VALUES (?, 0, 0, 0, 0, 0, 0)`,
              [team]
            );
            return rows
          } else if (action === 'del') {
            const [rows] = await db.query(
              `DELETE FROM seasonstanding${season} WHERE team_name = ?`,
              [team]
            );
            return rows
          }
        } catch (err) {
          console.error('Failed to delete or add team to standing:', err);
          throw err;
        } 
      },
      updateTeamStanding: async (updates, season) => {
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
          values.push(updates.team_name);
          const query = `
            UPDATE seasonstanding${season}
            SET ${fields.join(', ')}
            WHERE team_name = ?;
          `;
      
          const [rows] = await db.query(query, values);
          return rows;
        } catch (err) {
          console.error('Error updating team standing:', err);
          throw err;
        }
      }
}