const Customer = require("../models/Customer");

exports.getCustomers = async (req, res) => {
  const customers = await Customer.find({ user: req.user });
  res.json(customers);
};

exports.addCustomer = async (req, res) => {
  const customer = await Customer.create({ ...req.body, user: req.user });
  res.status(201).json(customer);
};

exports.updateCustomer = async (req, res) => {
  const customer = await Customer.findOneAndUpdate(
    { _id: req.params.id, user: req.user },
    req.body,
    { new: true }
  );
  res.json(customer);
};

exports.deleteCustomer = async (req, res) => {
  await Customer.findOneAndDelete({ _id: req.params.id, user: req.user });
  res.json({ msg: "Deleted" });
};
