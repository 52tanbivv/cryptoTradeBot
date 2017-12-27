<template>
  <nav class="navbar" id="navbar">
    <div class="navbar__wrapper">
      <div class="navbar__userBlock">
        <img class="navbar__img navbar__img--userPic" src="../img/login_icon.png" width="20" height="20">
        <a class="navbar__link" href="#"
           @click.prop="showSignInModal">Войти</a>
        <span>&nbsp/&nbsp</span>
        <a class="navbar__link" href="#"
           @click.prop="showSignUpModal">Зарегистрироваться</a>
      </div>
      <registrationModal></registrationModal>
    </div>
  </nav>
</template>

<script>
// import $ from 'jquery'
import RegistrationModal from './Register/RegistrationModal'
import vueMethods from '../mixins/methods'
import { mapState } from 'vuex'
export default {
  name: 'navbar',
  components: {
    RegistrationModal
  },
  data () {
    return {
    }
  },
  mixins: [vueMethods],
  methods: {
  },
  computed: mapState({
  }),
  mounted () {
    if (this.subdivisions === null) {
      this.$store.dispatch('getSubdivisions')
    }
    console.log('subdivisions in navbar - ', this.subdivisions)
    if (this.totalTicketsInCart.length !== 0) {
      this.ticketsInCart = true
    } else {
      this.ticketsInCart = false
    }
  }
}
</script>

<style media="screen" lang="stylus">
@import '../styles/navbar'

</style>
