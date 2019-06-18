import express from "express";
import cryptoRoutes from "./routes/cryptoRoutes";

var router = express.Router();

/**
 * Redirect to the cryptoRoute the /api/cryptocurrency endpoints
 */
router.use("/cryptocurrency", cryptoRoutes);

export default router;
