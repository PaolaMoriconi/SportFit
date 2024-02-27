const { v4: uuidv4 } = require('uuid')
const bcryptjs = require('bcryptjs')

function User(name, surname, email, password, { avatar }) {
  this.id = uuidv4()
  this.name = name.trim()
  this.surname = surname.trim()
  this.email = email.trim()
  this.password = bcryptjs.hashSync(password.trim(), 10)
  this.avatar = avatar || 'default-avatar.jpg'
  this.role = 'user'
}

module.exports = User

