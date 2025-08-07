const pool = require("./pool");
// console.log(process.env.MSG)
async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(name, message, date) {
  await pool.query("INSERT INTO messages (name, message, date) VALUES ($1, $2, $3)", [name, message, date]);
}

module.exports = {
  getMessages, insertMessage
};
// await pool.query('SELECT * FROM usernames WHERE username LIKE ("%$1%")', [search])