import * as types from '../mutation-types'

const state = {
  news: [],
  newsCategory: []
}

const mutations = {
  [types.RECEIVE_NEWS] (state, newsObject) {
    console.log('news in news module - ', newsObject.news)
    state.news = newsObject.news
    console.log('state news in news module - ', state.news)
  },

  [types.RECEIVE_NEWS_CATEGORY] (state, newsCategoryObject) {
    console.log('news_category in news module - ', newsCategoryObject)
    state.newsCategory = newsCategoryObject
    console.log('state news_category in news module - ', state.newsCategory)
  }
}

export default {
  state, mutations
}
