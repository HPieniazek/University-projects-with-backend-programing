import express from "express";
const router = express.Router();

const {
  getClient,
  getClients,
  createClient,
  updateClient,
  deleteClient
} = require("./clientController")


router.route('/').get(getClients).post(createClient).delete(deleteClient).put(updateClient)
router.route('/:id').get(getClient)

module.exports = router; 