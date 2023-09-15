const { body } = require("express-validator");

exports.validatePerson = () => {
  return (
    body("name")
      .exists()
      .withMessage("Name is a mandatory field")
      .isLength({ min: 2 })
      .withMessage("Name must be at least 2 characters long")
      .isAlpha()
      .withMessage("Name must only contain alphabetical characters")
      .trim()
      .escape(),
    body("age")
      .exists()
      .withMessage("Age is a mandatory field")
      .isInt()
      .withMessage("Age must be an integer"),
    body("gender")
      .exists()
      .withMessage("Gender is a mandatory field")
      .isLength({ min: 1, max: 1 })
      .withMessage("Gender must be a single character")
      .custom((value) => {
        if (value === "M" || value === "F") {
          return true;
        }
        return false;
      })
      .withMessage("Gender must be either M or F"),
    body("hobbies")
      .exists()
      .withMessage("Hobbies is a mandatory field")
      .isArray()
      .withMessage("Hobbies must be an array"),
    body("favoriteFoods")
      .exists()
      .withMessage("Favorite Foods is a mandatory field")
      .isArray()
      .withMessage("Favorite Foods must be an array")
  );
};
