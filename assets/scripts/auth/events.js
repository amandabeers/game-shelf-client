'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const shelfApi = require('./../shelf/api')
const shelfUi = require('./../shelf/ui')

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(() => {
      onSignIn(event)
      ui.signUpSuccess()
    })
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .then(() => {
      shelfApi.getShelf()
        .then(shelfUi.getShelfSuccess)
        .catch(shelfUi.getShelfFailure)
    })
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  if (formData.passwords.old === formData.passwords.new) {
    ui.samePasswordMessage()
  } else {
    api.changePassword(formData)
      .then(ui.changePasswordSuccess)
      .catch(ui.changePasswordFailure)
  }
}

const onCloseModal = () => {
  ui.resetForms()
}

const onLaunchModal = () => {
  ui.resetForms()
}

const onSignOut = () => {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('body').on('click', '.close', onCloseModal)
  $('body').on('click', '.launch-modal', onLaunchModal)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
