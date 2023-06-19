import { FFAddictPlayer } from "@model";
import mongoose from "mongoose";

const FifaAddictPlayerSchema = mongoose.model<FFAddictPlayer>(
  "ff-addict",
  new mongoose.Schema({
    uid: {
      type: String,
      required: true,
    },
    pos1: {
      type: String,
      default: null,
    },
    pos1val: {
      type: Number,
      default: 0,
    },
    team_id: {
      type: String,
      default: 0,
    },
    team_name: {
      type: String,
      default: 0,
    },
    nation_squad_id: {
      type: String,
      default: 0,
    },
    nation_squad_name: {
      type: String,
      default: 0,
    },
    liveperfamount: {
      type: String,
      default: 0,
    },
    update_statchange: {
      type: String,
      default: 0,
    },
    all_statchange: {
      type: String,
      default: 0,
    },
    name: {
      type: String,
      default: 0,
    },
    pos: {
      type: String,
      default: 0,
    },
    year: {
      type: String,
      default: 0,
    },
    skill_level: {
      type: String,
      default: 0,
    },
    pricekr: {
      type: Number,
      default: 0,
    },
    attrA: {
      type: Number,
      default: 0,
    },
    attrB: {
      type: Number,
      default: 0,
    },
    attrC: {
      type: Number,
      default: 0,
    },
    year_short: {
      type: String,
      default: 0,
    },
    created_date: {
      type: Date,
      default: Date.now,
    },
  })
);

export { FifaAddictPlayerSchema };
