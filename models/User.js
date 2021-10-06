const { model, Schema } = require('mongoose')

const User = new Schema({
  email: String,
  favorites: [{
    type: Schema.Types.ObjectId,
    ref: 'Favorite'
  }]
})

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)