const Incomeplan = require('../models').Incomeplan;

exports.create = async (req, res) => {
  try {
    const data = await Incomeplan.findOne({ userId: req.user.id });
    if (data) {
      const updatedData = await Incomeplan.findByIdAndUpdate(
        { _id: data._id },
        req.body,
      );
      res.json({ success: true, data: updatedData });
    } else {
      req.body.userId = req.user.id;
      const newData = await Incomeplan.create(req.body);
      res.json({ success: true, data: newData });
    }
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: err });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Incomeplan.find({ userId: req.user.id });
    res.json({ success: true, data });
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: err });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedData = await Incomeplan.findByIdAndUpdate(
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
    const deletedData = await Incomeplan.findByIdAndDelete({ _id: req.params.id });
    res.json({ success: true, data: deletedData });
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: err });
  }
};