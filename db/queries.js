const pool = require("./pool");
async function getAllUsers() {
  const { rows } = await pool.query("SELECT * FROM usernames;");
  return rows;
}
async function searchPattern(pattern) {
  const { rows } = await pool.query(
    "SELECT * FROM usernames where username LIKE $1",
    ["%" + pattern + "%"]
  );
  return rows;
}
async function insertUsername(username) {
  await pool.query("INSERT INTO usernames(username) VALUES ($1);", [username]);
}
module.exports = { getAllUsers, searchPattern, insertUsername };
