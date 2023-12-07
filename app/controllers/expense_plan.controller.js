const Expenseplan = require('../models').Expenseplan;

exports.create = async (req, res) => {
  try {
    const data = await Expenseplan.findOne({ userId: req.user.id });
    if (data) {
      const updatedData = await Expenseplan.updateOne(
        { _id: data._id },
        req.body,
      );
      res.json({ success: true, data: updatedData });
    } else {
      req.body.userId = req.user.id;
      const newData = await Expenseplan.create(req.body);
      res.json({ success: true, data: newData });
    }
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: err });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Expenseplan.find({ userId: req.user.id });
    res.json({ success: true, data });
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: err });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedData = await Expenseplan.updateOne(
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
    const deletedData = await Expenseplan.deleteOne({ _id: req.params.id });
    res.json({ success: true, data: deletedData });
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: err });
  }
};