import express from "express";
var router = express.Router();
//import cache from "../../public/json/cache.json";
import cryptoController from "../controllers/cryptoController";

/**
 * GET /api/cryptocurrency/listings/latest
 */
router.route("/listings/latest").get(cryptoController.fetchCrypto);

export default router;
