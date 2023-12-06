const Expense = require('../models').Expense;

exports.create = async (req, res) => {
  try {
    req.body.userId = req.user.id;
    const newData = await Expense.create(req.body);
    res.json({ success: true, data: newData });
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: err });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Expense.find({ userId: req.user.id });
    res.json({ success: true, data });
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: err });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedData = await Expense.updateOne(
      { id: req.params.id },
      req.body,
    );
    res.json({ success: true, data: updatedData });
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: err });
  }
};

exports.delete = async (req, res) => {
  try {
    const deletedData = await Expense.deleteOne({ id: req.params.id });
    res.json({ success: true, data: deletedData });
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: err });
  }
};