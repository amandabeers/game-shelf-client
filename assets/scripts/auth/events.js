'use strict'

const addHandlers = () => {
  $('#sign-up').on('click', onSignUp)
  $('#sign-in').on('click', onSignIn)
  $('#change-password').on('click', onChangePassword)
  $('#sign-out').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
