import * as types from '../mutation-types'

const state = {
  offices: []
}

const mutations = {
  [types.RECEIVE_BOXOFFICES] (state, boxOffices) {
    console.log('boxOffices in boxOffices module- ', boxOffices.salepoint)
    state.offices = boxOffices.salepoint
    console.log('offices - ', state.offices)
  }
}

export default {
  state, mutations
}
