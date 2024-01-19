const { v4: uuidv4 } = require('uuid')

function User(name, surname, email, password, { avatar }) {
  this.id = uuidv4()
  this.name = name.trim()
  this.surname = surname.trim()
  this.email = email.trim()
  this.password = password.trim()
  this.avatar = avatar || 'default-avatar.jpg'
  this.rol = 'user'
}

module.exports = User
