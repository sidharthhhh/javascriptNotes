const mongoose = require("mongoose");
const db = require("./db")

const patientModel = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
      },
      lastname: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        min: 0
      },
      weight: {
        type: Number,
        min: 0
      },
      status: {
        type: String,
        enum: ['Serious', 'Normal']
      },
      medical_history: {
        type: String
      },
      pp: {
        type: String,
        enum: ['Active', 'Unactive'],
        default: 'Unactive'
      }
});
const patient = mongoose.model("patient", patientModel);
module.exports = patient;