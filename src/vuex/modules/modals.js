import * as types from '../mutation-types'

const state = {
  eventBannersVisible: false,
  registrationModalVisible: false,
  view: 'signIn',
  widgetVisible: false
}

const mutations = {
  [types.SHOW_EVENT_BANNERS] (state) {
    state.eventBannersVisible = true
  },

  [types.HIDE_EVENT_BANNERS] (state) {
    state.eventBannersVisible = false
  },

  [types.SHOW_REGISTRATION_MODAL] (state) {
    state.registrationModalVisible = true
  },

  [types.HIDE_REGISTRATION_MODAL] (state) {
    state.registrationModalVisible = false
  },

  [types.SHOW_SIGNUP_FORM] (state) {
    state.view = 'signUp'
  },

  [types.SHOW_SIGNIN_FORM] (state) {
    state.view = 'signIn'
  },

  [types.SHOW_WIDGET] (state) {
    console.log('in actions')
    state.widgetVisible = true
  },

  [types.CLOSE_WIDGET] (state) {
    state.widgetVisible = false
  }
}

export default {
  state,
  mutations
}
