<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import store from './vuex'

export default {
  name: 'app',
  mounted () {
    if (window.performance.navigation.type === 1) {
      console.log('page reloaded')
      this.$router.push('/')
    } else {
      console.info('This page is not reloaded')
    }
  },
  store
}
</script>

<style lang="stylus">
@import url("https://fonts.googleapis.com/icon?family=Material+Icons")
@import '../node_modules/vue-material/dist/vue-material.css'
@import '/styles/colors'

@font-face {
  font-weight: normal;
  font-style: normal;
  font-family: "Open Sans";
  src: url("./fonts/OpenSans-Regular.woff2") format("woff2"); }

@font-face {
  font-weight: normal;
  font-style: normal;
  font-family: "Open Sans Semibold";
  src: url("./fonts/OpenSans-Semibold.woff2") format("woff2"); }


.app
  max-width: 1300px
  min-height: 100%
  margin: 0 auto
  background: #fbfbfb
body
  min-height: 100%
  overflow-y: scroll
  font-family: 'Roboto', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #fff
  font-size: 16px
  background: #f2f2f2 url('./img/bodyBackgroundMoscow.jpg')
  background-repeat: no-repeat
  background-size: cover


a:hover
  text-decoration: none !important;

.modal-enter-active, .modal-leave-active {
  transition: opacity .5s ease;
}
.modal-enter, .modal-leave-active {
  opacity: 0;
}
</style>
