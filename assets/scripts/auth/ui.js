'use strict'

const store = require('./../store')

const signUpSuccess = responseData => {
  $('form').trigger('reset')
  console.log('Sign up success')
}

const signUpFailure = () => {
  $('form').trigger('reset')
  console.log('Sign up failed')
}

const signInSuccess = responseData => {
  $('form').trigger('reset')
  store.user = responseData.user
  console.log('Sign in success', store.user)
}

const signInFailure = () => {
  $('form').trigger('reset')
  console.log('Sign in failed')
}

const samePasswordMessage = () => {
  $('form').trigger('reset')
  $('#change-pw-message').text('New password must be different from old')
  setTimeout(function () {
    $('#change-pw-message').text('')
  }, 3000)
}

const changePasswordSuccess = () => {
  $('form').trigger('reset')
  $(`#pwModal`).modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('#auth-message').text('Your password has been changed')
  setTimeout(function () {
    $('#auth-message').text('')
  }, 3000)
}

const changePasswordFailure = () => {
  $('form').trigger('reset')
  $('#change-pw-message').text('Password change failed')
  setTimeout(function () {
    $('#change-pw-message').text('')
  }, 3000)
}

const signOutSuccess = () => {
  $('.content').empty()
  console.log('Signed out')
}

const signOutFailure = () => {
  console.log('Sign out failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  samePasswordMessage,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
