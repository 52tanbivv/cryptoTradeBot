/* import axios from 'axios' */
import { API_URL } from '../../config/constants'
import md5 from 'md5'
import $ from 'jquery'
export default {
  // receiving recomended events for the main-page
  getRecomendedList (regionalData, context) {
    return new Promise((resolve, reject) => {
      console.log('regionalData in recomended list - ', regionalData)
    /*  let token = window.localStorage.getItem('token') */
      var authId = 'api.kassy.ru'
      var secretKey = 'a619d974658f3e749b2d88b215baea46'
      var xml = '<?xml version="1.0" encoding="utf-8"?><request module="page_event_list" db="' + regionalData.db + '" format="json"><filter is_recommend="1" date_from="' + regionalData.dateFrom + '" date_to="' + regionalData.dateTo + '"/><auth id="' + authId + '" /></request>'
      var sign = md5(xml + secretKey)
      console.log('xml - ', xml)
      $.ajax({
        url: API_URL,
        type: 'post',
        processData: true,
        dataType: 'json',
        data: {'xml': xml, 'sign': sign},
        success: function (data) {
          return data
        },
        error: function (data, textStatus) {
          $('#data').html('error')
        }
      })
        .then((data) => {
          return resolve(data.content)
        })
        .catch(err => reject(err))
    })
  },
  // receiving cinema for the main-page
  getCinemaList (regionalData, context) {
    return new Promise((resolve, reject) => {
    /*  let token = window.localStorage.getItem('token') */
      var authId = 'api.kassy.ru'
      var secretKey = 'a619d974658f3e749b2d88b215baea46'
      var xml = '<?xml version="1.0" encoding="utf-8"?><request module="page_event_list" db="' + regionalData.db + '" format="json"><filter show_type_id="8" date_from="' + regionalData.dateFrom + '" date_to="' + regionalData.dateTo + '" /><auth id="' + authId + '" /></request>'
      var sign = md5(xml + secretKey)
      $.ajax({
        url: API_URL,
        type: 'post',
        processData: true,
        dataType: 'json',
        data: {'xml': xml, 'sign': sign},
        success: function (data) {
          return data
        },
        error: function (data, textStatus) {
          $('#data').html('error')
        }
      })
        .then((data) => {
          return resolve(data.content)
        })
        .catch(err => reject(err))
    })
  },
  // receiving concerts for the main-page
  getConcertsList (regionalData, context) {
    return new Promise((resolve, reject) => {
    /*  let token = window.localStorage.getItem('token') */
      var authId = 'api.kassy.ru'
      var secretKey = 'a619d974658f3e749b2d88b215baea46'
      var xml = '<?xml version="1.0" encoding="utf-8"?><request module="page_event_list" db="' + regionalData.db + '" format="json"><filter show_type_id="1" date_from="' + regionalData.dateFrom + '" date_to="' + regionalData.dateTo + '" /><auth id="' + authId + '" /></request>'
      var sign = md5(xml + secretKey)
      $.ajax({
        url: API_URL,
        type: 'post',
        processData: true,
        dataType: 'json',
        data: {'xml': xml, 'sign': sign},
        success: function (data) {
          return data
        },
        error: function (data, textStatus) {
          $('#data').html('error')
        }
      })
        .then((data) => {
          return resolve(data.content)
        })
        .catch(err => reject(err))
    })
  },
  // receiving subdivisions for the main-page
  getSubdivisions () {
    return new Promise((resolve, reject) => {
    /*  let token = window.localStorage.getItem('token') */
      var authId = 'api.kassy.ru'
      var secretKey = 'a619d974658f3e749b2d88b215baea46'
      var xml = '<?xml version="1.0" encoding="utf-8"?><request module="subdivision" db="" format="json"><filter show_type_id="1" is_recommend="true" state="" /><auth id="' + authId + '" /></request>'
      var sign = md5(xml + secretKey)
      $.ajax({
        url: API_URL,
        type: 'post',
        processData: true,
        dataType: 'json',
        data: {'xml': xml, 'sign': sign},
        success: function (data) {
          console.log('subdivisions in api - ', data)
          return data
        },
        error: function (data, textStatus) {
          $('#data').html('error')
        }
      })
        .then((data) => {
          return resolve(data.content)
        })
        .catch(err => reject(err))
    })
  }

  // Getting user's current geo-location
/*  getCurrentLocation () {
    return new Promise((resolve, reject) => {
      var currentPosition
      if (navigator.geolocation) {
        var gl = navigator.geolocation
        gl.getCurrentPosition(function (position) {
          currentPosition = position.coords
          console.log(currentPosition)
          return currentPosition
        })
      }

      return resolve(gl)
    })
  } */
}
