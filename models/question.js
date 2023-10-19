const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  options: [{
    text: String,
    isCorrect: Boolean,
  }],
  explanation: String,
  // Otros campos según sea necesario para tu modelo de pregunta
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
