const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
  }],
  // Otros campos según sea necesario para tu modelo de tema
});

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;
