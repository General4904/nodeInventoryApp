import mongoose, { Schema, model } from "mongoose";

export interface IItem {
  name: String;
  manufacturer: String;
  model: String;
  serialNumber: String;
  quantity: Number;
  condition: String;
  lastServiceDate: Date;
  notes: String;
}

const itemSchema = new Schema<IItem>({
  name: {
    type: String,
    required: true,
  },

  manufacturer: {
    type: String,
    required: true,
  },

  model: {
    required: true,
    type: String,
  },

  serialNumber: {
    type: String,
  },

  quantity: {
    type: Number,
    required: true,
  },

  condition: {
    type: String,
    enum: [
      "Operational",
      "Due for Preventive Maintenance",
      "Requires corrective maintenance",
      "Under Repair",
      "Awaiting Parts",
      "Out of Service",
      "Decommissioned",
    ],
    required: true,
  },

  notes: {
    type: String,
    required: true,
  },
});

export const Item = model<IItem>("Item", itemSchema);
