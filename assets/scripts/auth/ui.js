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
  console.log('New password must be different from old')
}

const changePasswordSuccess = () => {
  $('form').trigger('reset')
  console.log('Password changed')
}

const changePasswordFailure = () => {
  $('form').trigger('reset')
  console.log('Password change failed')
}

const signOutSuccess = () => {
  $('form').trigger('reset')
  console.log('Signed out')
}

const signOutFailure = () => {
  $('form').trigger('reset')
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
