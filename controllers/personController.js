const Person = require("../models/person");

exports.createPerson = async (req, res) => {
  const { name, age, email } = req.body;
  if (!name || !age || !email) {
    return res.status(400).json({ msg: "Please provide name, age and email" });
  }
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof age !== "number"
  ) {
    return res.status(400).json({
      msg: "Invalid data types",
      data: { name: typeof name, age: typeof age, email: typeof email },
      expected: { name: "string", age: "number", email: "string" },
    });
  }
  try {
    const newPerson = await Person.create(req.body);
    res.status(200).json(newPerson);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAllPeople = async (req, res) => {
  try {
    const people = await Person.find();
    res.status(200).json(people);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getPersonById = async (req, res) => {
  try {
    const person = await Person.findById(req.params.user_id);
    res.status(200).json(person);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updatePersonById = async (req, res) => {
  const { user_id } = req.params;
  const { name, age, email } = req.body;
  if (!name || !age || !email) {
    return res.status(400).json({ msg: "Please provide name, age and email" });
  }
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof age !== "number"
  ) {
    return res.status(400).json({
      msg: "Invalid data types",
      data: { name: typeof name, age: typeof age, email: typeof email },
      expected: { name: "string", age: "number", email: "string" },
    });
  }
  try {
    const updatedPerson = await Person.findByIdAndUpdate(user_id, req.body, {
      new: true,
    });
    res.status(200).json(updatedPerson);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deletePersonById = async (req, res) => {
  const { user_id } = req.params;
  try {
    const deletedPerson = await Person.findByIdAndDelete(user_id);
    res.status(200).json(deletedPerson);
  } catch (err) {
    res.status(500).json(err);
  }
};
