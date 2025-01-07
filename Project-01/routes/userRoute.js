const express = require("express");

const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
} = require("../controllers/userController");

const router = express.Router();

// Routes
// route.get("/users", async (req, res) => {
//   const allDbUsers = await User.find({});
//   const html = `
//         <ui>${allDbUsers
//           .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
//           .join("")}</ui>
//         `;
//   res.send(html);
// });

// route.get("/",handleGetAllUsers)
router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

// Inserting Into Mongo DataBase
// route.post("/", handleCreateNewUser);

module.exports = router;
