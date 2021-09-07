const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Its Mayank";

router.post(
  "/",
  [
    body("firstName", "Must be greater than 3 words").isLength({ min: 3 }),
    body("lastName").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "5 digits required").isLength({ min: 5 }),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "User with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      secPassword = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: secPassword,
      });
      const data = {
        user: { id: user.id },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      // console.log(jwtData);
      res.json({authtoken});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Error!");
    }
  }
);

module.exports = router;
