const express = require("express");
const router = express.Router();
const { check, body, validationResult } = require("express-validator");

const { signout, signup } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("must be at least 3 chars long"),
    check("email").isEmail().withMessage("email id is required"),
    check("password")
      .isLength({ min: 5 })
      .withMessage("please enter password at least 5 char"),
  ],
  signup
);
router.get("/signout", signout);

module.exports = router;
