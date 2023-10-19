const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  topics: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Topic',
  }],
  // Otros campos según sea necesario para tu modelo de curso
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
