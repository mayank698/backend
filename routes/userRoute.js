const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const { body, validationResult } = require("express-validator");

router.post(
  "/",
  [
    body("firstName", "Must be greater than 3 words").isLength({ min: 3 }),
    body("lastName").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "5 digits required").isLength({ min: 5 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    })
      .then((user) => res.json(user))
      .catch((err) => console.log(err));
  }
);

module.exports = router;
