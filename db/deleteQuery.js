const pool = require("./pool");
async function deleteMessages(){
    await pool.query("DELETE FROM messages");
}
deleteMessages();