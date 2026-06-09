import { Router } from "express";
import { getAllItems } from "./items.controller.js";
import { saveNewItem } from "./items.controller.js";

const router = Router();

router.get("/items", getAllItems);
router.post("/addItem", saveNewItem);

export default router;
