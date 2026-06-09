import { Request, Response } from "express";
import { Item } from "./item.model.js";

export const getAllItems = async (req: Request, res: Response) => {
  try {
    const items = await Item.find();

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const saveNewItem = async (req: Request, res: Response) => {
  try {
    const { name, manufacturer, model, quantity, condition, notes } = req.body;

    if (!name || !manufacturer || !model || !quantity || !condition || !notes) {
      return res.status(400).json({
        sucess: false,
        message: "Fields required",
      });
    }

    const newItem = await Item.create({
      name: name,
      manufacturer: manufacturer,
      quantity: quantity,
      model: model,
      condition: condition,
      notes: notes,
    });

    res.status(201).json({
      sucess: true,
      message: "Item saved",
    });
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Item already exists",
        debugError: error.message || error,
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
