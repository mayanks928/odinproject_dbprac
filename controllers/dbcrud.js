const queries = require("../db/queries");
exports.getusers = async (req, res) => {
  //   console.log("usernames will be logged here - wip");
  const usernames = await queries.getAllUsers();
  const searchresults = await queries.searchPattern(req.query.search);
  res.render("home", {
    usernames: usernames,
    searchresults: searchresults,
    query: req.query,
  });
};
exports.addUserGet = (req, res) => {
  return res.render("newuserform.ejs");
};

exports.addUserPost = async (req, res) => {
  //   console.log("username to be saved: ", req.body.username);
  const username = req.body.username;
  await queries.insertUsername(username);
  console.log(`Inserted user:${username}`);
  res.redirect("/");
};
exports.clearDatabase = async (req, res) => {
  await queries.clearDatabase();
  console.log("Cleared Database");
  res.redirect("/");
};
