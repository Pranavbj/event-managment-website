const express = require('express');
const router = express.Router();
const RefreshController = require("../controllers/refreshtokencontroller");

router.post('/refresh',RefreshController.handleRefreshToken);

module.exports=router;