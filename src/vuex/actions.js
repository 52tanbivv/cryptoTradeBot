import * as types from './mutation-types'
import onload from '../api/onload'
import filtered from '../api/filteredContent'
import cart from '../api/cart'
import currentVenue from '../api/currentVenue'
import eventPage from '../api/eventPage'
import tickets from '../api/tickets'
import venues from '../api/venues'
import boxOffices from '../api/boxOffices'
import news from '../api/news'

export const showEventBanners = ({ commit }) => {
  commit(types.SHOW_EVENT_BANNERS)
}

export const hideEventBanners = ({ commit }) => {
  commit(types.HIDE_EVENT_BANNERS)
}

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

export const getRecomendedList = ({commit}, regionalData) => {
  onload.getRecomendedList(regionalData)
    .then((recomended) => {
      commit(types.RECEIVE_RECOMENDED, recomended)
    })
    .catch((err) => {
      console.error('Error receiving recomended: ', err)
    })
}

export const getCinemaList = ({commit}, regionalData) => {
  onload.getCinemaList(regionalData)
    .then((movie) => {
      commit(types.RECEIVE_MOVIES, movie)
    })
    .catch((err) => {
      console.error('Error receiving movies: ', err)
    })
}

export const getConcertsList = ({commit}, regionalData) => {
  onload.getConcertsList(regionalData)
    .then((concert) => {
      commit(types.RECEIVE_CONCERTS, concert)
    })
    .catch((err) => {
      console.error('Error receiving concerts: ', err)
    })
}

// Getting user's current geo-location
export const getCurrentLocation = ({commit}, currentLocation) => {
  console.log(currentLocation)
  commit(types.RECEIVE_LOCATION, currentLocation)
}

export const getCurrentCoords = ({commit}, crd) => {
  console.log(crd)
  commit(types.RECEIVE_COORDS, crd)
}

export const getSubdivisions = ({commit}, subdivisions) => {
  onload.getSubdivisions()
    .then((subdivisions) => {
      commit(types.RECEIVE_SUBDIVISIONS, subdivisions)
    })
    .catch((err) => {
      console.error('Error receiving subdivisions: ', err)
    })
}

export const getCurrentVenueEvents = ({commit}, regionalData) => {
  currentVenue.getCurrentVenueEvents(regionalData)
    .then((currentEvent) => {
      commit(types.RECEIVE_CURRENT_VENUE_EVENTS, currentEvent)
    })
    .catch((err) => {
      console.error('Error receiving concerts: ', err)
    })
}

// recieve list of all venues for the current City
export const getVenuesList = ({commit}, regionalData) => {
  venues.getVenuesList(regionalData)
    .then((venues) => {
      console.log(venues)
      commit(types.RECEIVE_VENUES, venues)
    })
    .catch((err) => {
      console.error('Error receiving concerts: ', err)
    })
}

// recieve list of all halls for the current City
export const getVenuesHallsList = ({commit}, regionalData) => {
  venues.getVenuesHallsList(regionalData)
    .then((halls) => {
      console.log(halls)
      commit(types.RECEIVE_HALLS, halls)
    })
    .catch((err) => {
      console.error('Error receiving concerts: ', err)
    })
}

// recieve list of all events ans shows for the current city
export const getEventsAndShows = ({commit}, regionalData) => {
  venues.getEventsAndShows(regionalData)
    .then((events) => {
      console.log('events in actions - ', events)
      commit(types.RECEIVE_EVENTS_AND_SHOWS, events)
    })
    .catch((err) => {
      console.error('Error receiving events and shows: ', err)
    })
}

// recieve list of box offices for the current city
export const getBoxOfficesList = ({commit}, regionalData) => {
  boxOffices.getBoxOfficesList(regionalData)
    .then((boxOffices) => {
      console.log('boxOffices in actions - ', boxOffices)
      commit(types.RECEIVE_BOXOFFICES, boxOffices)
    })
    .catch((err) => {
      console.error('Error receiving events and shows: ', err)
    })
}

// recieve list of news for the current city
export const getNewsList = ({commit}, regionalData) => {
  news.getNewsList(regionalData)
    .then((news) => {
      console.log('news in actions - ', news)
      commit(types.RECEIVE_NEWS, news)
    })
    .catch((err) => {
      console.error('Error receiving events and shows: ', err)
    })
}

export const getNewsCategoryList = ({commit}, regionalData) => {
  news.getNewsCategoryList(regionalData)
    .then((newsCategory) => {
      console.log('news in actions - ', newsCategory)
      commit(types.RECEIVE_NEWS_CATEGORY, newsCategory)
    })
    .catch((err) => {
      console.error('Error receiving events and shows: ', err)
    })
}

// recieve filtered content after user clicked one of filters
export const getFilteredEvents = ({commit}, regionalData) => {
  filtered.getFilteredEvents(regionalData)
    .then((filteredContent) => {
      commit(types.RECEIVE_FILTERED_CONTENT, filteredContent)
    })
    .catch((err) => {
      console.error('Error receiving filtered content: ', err)
    })
}

// Save current event details after user clicked on event and been forwarded to eventPage
export const saveCurrentEventDetails = ({ commit }, content) => {
  console.log('content', content)
  commit(types.SAVE_CURRENT_EVENT, content)
}

// recieve event details after user follow direct link
export const recieveEventData = ({commit}, regionalData) => {
  eventPage.recieveEventData(regionalData)
    .then((currentEvent) => {
      commit(types.RECEIVE_CURRENT_EVENT, currentEvent)
    })
    .catch((err) => {
      console.error('Error receiving filtered content: ', err)
    })
}

// recieve show details after user follow direct link
export const recieveShowData = ({commit}, regionalData) => {
  eventPage.recieveShowData(regionalData)
    .then((currentShow) => {
      commit(types.RECEIVE_CURRENT_SHOW, currentShow)
    })
    .catch((err) => {
      console.error('Error receiving filtered content: ', err)
    })
}

// recieve building details after user follow direct link
export const recieveBuildingData = ({commit}, regionalData) => {
  eventPage.recieveBuildingData(regionalData)
    .then((currentBuilding) => {
      commit(types.RECEIVE_CURRENT_BUILDING, currentBuilding)
    })
    .catch((err) => {
      console.error('Error receiving filtered content: ', err)
    })
}

// recieve hall details after user follow direct link
export const recieveHallData = ({commit}, regionalData) => {
  eventPage.recieveHallData(regionalData)
    .then((currentHall) => {
      commit(types.RECEIVE_CURRENT_HALL, currentHall)
    })
    .catch((err) => {
      console.error('Error receiving filtered content: ', err)
    })
}

// Changing current content on main page. By default it shows Recomended, Concerts and Cinema blocks of events.
// Otherwise it shows current content loaded after user has clicked on any filter
export const changeCurrentContent = ({ commit }, content) => {
  commit(types.CHANGE_CURRENT_CONTENT, content)
}

// Changing current db after a user changed city.
export const changeCurrentDb = ({ commit }, content) => {
  commit(types.CHANGE_CURRENT_DB, content)
}

// Show\Close widget to choose ticket
export const showWidget = ({ commit }) => {
  commit(types.SHOW_WIDGET)
}

export const closeWidget = ({ commit }) => {
  commit(types.CLOSE_WIDGET)
}

// Start\Stop preloader
export const startPreloader = ({ commit }) => {
  console.log('preloader fired')
  commit(types.START_PRELOADER)
}

export const stopPreloader = ({ commit }) => {
  console.log('preloader stoped')
  commit(types.STOP_PRELOADER)
}

// recieve full information about seats
export const loadSeatsForCurrentEvent = ({commit}, params) => {
  tickets.loadSeatsForCurrentEvent(params)
    .then((tickets) => {
      console.log(tickets)
      commit(types.RECEIVE_TICKETS, tickets)
    })
    .catch((err) => {
      console.error('Error receiving filtered content: ', err)
    })
}

// register session
export const addSessionId = ({ commit }, params) => {
  cart.getSessionId(params)
    .then((sessionIdArray) => {
      console.log('sessionIdArray in action ', sessionIdArray)
      commit(types.ADD_SESSION_ID, sessionIdArray)
    })
    .catch((err) => {
      console.error('Error receiving sessionId content: ', err)
    })
}

// add tickets to cart
export const addPlaceToCart = ({ commit }, params) => {
  cart.addPlaceToCart(params)
    .then((result) => {
      console.log(result)
      commit(types.ADD_PLACE_TO_CART, result)
    })
    .catch((err) => {
      console.error('Error adding place to cart: ', err)
    })
}

// recieve total amount of places in cart
export const getPlacesInCart = ({ commit }, params) => {
  cart.getPlacesInCart(params)
    .then((result) => {
      console.log('getPlacesInCart ', result)
      commit(types.GET_PLACES_IN_CART, result)
    })
    .catch((err) => {
      console.error('Error receiving places in cart: ', err)
    })
}
