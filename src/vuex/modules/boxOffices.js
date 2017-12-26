import * as types from '../mutation-types'

const state = {
  offices: [],
  loading: true
}

const mutations = {
  [types.RECEIVE_BOXOFFICES] (state, boxOffices) {
    console.log('boxOffices in boxOffices module- ', boxOffices.salepoint)
    console.log('loading - ', state.loading)
    state.offices = boxOffices.salepoint
    state.loading = false
    console.log('loading - ', state.loading)
  }
}

export default {
  state, mutations
}
