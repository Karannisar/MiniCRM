const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  getCustomers,
  addCustomer,
  deleteCustomer,
  updateCustomer
} = require("../controllers/customerController");

router.get("/", auth, getCustomers);
router.post("/", auth, addCustomer);
router.put("/:id", auth, updateCustomer);
router.delete("/:id", auth, deleteCustomer);

module.exports = router;
