require("dotenv").config();
const { Client } = require("pg");
const SQL = `
CREATE TABLE IF NOT EXISTS usernames(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
username VARCHAR(255));

INSERT INTO usernames(username)
VALUES ('mayanks928'),('johndoe123'),('sampleusername1235');`;

async function main() {
  console.log("seeding");

  const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}
main();
