const Income = require('../models').Income;

exports.create = async (req, res) => {
  try {
    req.body.userId = req.user.id;
    const newData = await Income.create(req.body);
    res.json({ success: true, data: newData });
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: err });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Income.find({ userId: req.user.id }, ['id', 'amount', 'category', 'description', 'date']);
    res.json({ success: true, data });
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: err });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedData = await Income.updateOne(
      { _id: req.params.id },
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
    const deletedData = await Income.deleteOne({ _id: req.params.id });
    res.json({ success: true, data: deletedData });
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: err });
  }
};