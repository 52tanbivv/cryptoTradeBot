<template>
  <div class="overlay"
       v-if="modals.registrationModalVisible">
    <div class="registration">
      <button class="registration__close" type="button"
              @click.prop="hideRegistrationModal">
        <img class="registration__cross" src="../../img/cross.png" alt="">
      </button>

      <div class="registration__tabs">
        <button class="registration__tab registration__tab--signIn"
                   @click="showSignInForm">Вход</button>
        <button class="registration__tab registration__tab--signUp"
                   @click="showSignUpForm">Регистрация</button>
      </div>

      <div class="contentWrapper">
        <transition name="fade" mode="out-in">
          <component :is="modals.view"></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import SignIn from './SignIn'
import SignUp from './SignUp'
import $ from 'jquery'
import { mapState } from 'vuex'
export default {
  name: 'registrationModal',
  components: {
    SignIn,
    SignUp
  },
  data () {
    return {
      view: 'signIn'
    }
  },
  computed: mapState({
    modals: state => state.modals
  }),
  methods: {
    hideRegistrationModal () {
      this.$store.dispatch('hideRegistrationModal')
    },
    showSignUpForm (e) {
      e.preventDefault()
      if ($(e.target).hasClass('registration__tab--signUp')) {
        $(e.target).css('box-shadow', 'none')
        $(e.target).addClass('registration__tab--current')
        $(e.target).siblings().css('box-shadow', 'inset -1px -1px 1px 1px rgba(38,38,43,0.4)')
        $(e.target).siblings().removeClass('registration__tab--current')
      }
      this.$store.dispatch('showSignUpForm')
    },
    showSignInForm (e) {
      e.preventDefault()
      if ($(e.target).hasClass('registration__tab--signIn')) {
        $(e.target).css('box-shadow', 'none')
        $(e.target).addClass('registration__tab--current')
        $(e.target).siblings().css('box-shadow', 'inset 1px -1px 1px 1px rgba(38,38,43,0.4)')
        $(e.target).siblings().removeClass('registration__tab--current')
      }
      this.$store.dispatch('showSignInForm')
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../styles/Register/registrationModal.styl'
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
