const pool = require("./index");

/// Users

/**
 * Get a single user from the database given their email.
//  *@param {String} email The email of the user.
//  * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function (email) {
  return pool
    .query(`SELECT * FROM users WHERE email = $1;`, [email])
    .then((res) => {
      console.log(res.rows);
      if (!res.rows[0]) {
        return null;
      }
      return res.rows[0];
    });
};

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function (id) {
  return pool.query(`SELECT * FROM users WHERE id = $1;`, [id]).then((res) => {
    console.log(res.rows);
    if (!res.rows[0]) {
      return null;
    }
    return res.rows[0];
  });
};

/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */

const addUser = function (user) {
  return pool
    .query(
      "INSERT INTO users (name, email, password) VALUES($1, $2, $3) RETURNING *",
      [user.name, user.email, user.password]
    )
    .then((res) => {
      console.log(res.rows);
    });
};

module.exports = {
  getUserWithEmail,
  addUser,
  getUserWithId,
};