'use strict'

const store = require('./../store')

const signUpSuccess = responseData => {
  $('form').trigger('reset')
}

const signUpFailure = () => {
  $('form').trigger('reset')
  $('#auth-message').text('Sign up failed')
  setTimeout(function () {
    $('#auth-message').text('')
  }, 3000)
}

const signInSuccess = responseData => {
  $('form').trigger('reset')
  store.user = responseData.user
  $('#sign-in').addClass('hidden')
  $('#landing-page').addClass('hidden')
  $('#auth-dropdown').removeClass('hidden')
  $('main').removeClass('hidden')
  $('#auth-message').text('Signed in successfully')
  setTimeout(function () {
    $('#auth-message').text('')
  }, 3000)
}

const signInFailure = () => {
  $('form').trigger('reset')
  $('#auth-message').text('Incorrect username or password')
  setTimeout(function () {
    $('#auth-message').text('')
  }, 3000)
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
  $('#auth-dropdown').addClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#landing-page').removeClass('hidden')
  $('#get-shelf').removeClass('active')
  $('#index-games').removeClass('active')
  $('main').addClass('hidden')
  $('#auth-message').text('Signed out')
  setTimeout(function () {
    $('#auth-message').text('')
  }, 3000)
}

const signOutFailure = () => {
  $('#auth-message').text('Signed out failed')
  setTimeout(function () {
    $('#auth-message').text('')
  }, 3000)
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
