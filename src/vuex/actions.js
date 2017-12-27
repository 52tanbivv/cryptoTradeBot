import * as types from './mutation-types'

export const showRegistrationModal = ({ commit }) => {
  commit(types.SHOW_REGISTRATION_MODAL)
}

export const hideRegistrationModal = ({ commit }) => {
  commit(types.HIDE_REGISTRATION_MODAL)
}

export const showSignUpForm = ({ commit }) => {
  commit(types.SHOW_SIGNUP_FORM)
}

export const showSignInForm = ({ commit }) => {
  commit(types.SHOW_SIGNIN_FORM)
}
