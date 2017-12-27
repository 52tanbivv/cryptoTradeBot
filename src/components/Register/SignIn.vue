<template>
  <form class="signIn" method="post" action="#">
    <h3 class="signIn__title">Войти через социальные сети</h3>
    <ul class="signIn__socials">
      <li class="signIn__social signIn__social--fb">
        <img class="signIn__icon signIn__icon--fb" src="../../img/fbIcon.svg" alt="">
      </li>
      <li class="signIn__social signIn__social--vk">
        <img class="signIn__icon signIn__icon--vk" src="../../img/vkIcon.svg" alt="">
      </li>
      <li class="signIn__social signIn__social--goo">
        <img class="signIn__icon signIn__icon--goo" src="../../img/gooIcon.svg" alt="">
      </li>
    </ul>

    <div class="signIn__inputBlock signUp__inputBlock--email">
      <i class="material-icons signIn__icon signIn__icon--email">email</i>
      <input class="signIn__input signIn__input--email" id="email" type="email" name="email" value=""
             v-model="credentials.email"
             @input="validateEmail">
      <label class="signIn__label signIn__label--email" for="email">Адрес электронной почты</label>
      <transition name="fade">
        <div class="signIn__warnBlock"
             v-if="!emailValid">
          <i class="material-icons signIn__icon signIn__icon--warn">warning</i>
          <span class="signIn__warn">Введите корректный email</span>
        </div>
      </transition>
    </div>

    <div class="signIn__inputBlock">
      <i class="material-icons signIn__icon signIn__icon--pass">https</i>
      <input class="signIn__input signIn__input--pass" id="password" type="password" name="password" value=""
             v-model="credentials.password">
      <label class="signIn__label signIn__label--pass" for="password">Пароль</label>
    </div>

    <div class="signIn__inputBlock signIn__inputBlock--captcha">
      <vue-recaptcha sitekey="6LdAJR0UAAAAAB8C2qdbO5Xj6vZJwf3ARa3mzJWX" size="width: 100%"></vue-recaptcha>
    </div>

    <button class="signIn__btn" type="submit" name="button"
            @click="signInAndForwardToDashboard($event)">Войти</button>

    <div class="signIn__restorePass">
      <a class="signIn__link" href="#">Забыли пароль?</a>
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex'
import { emailValidation } from '../../utils-convenience/index'
import VueRecaptcha from 'vue-recaptcha'
import $ from 'jquery'
export default {
  name: 'signIn',
  components: {
    VueRecaptcha
  },
  data () {
    return {
      credentials: {
        email: '',
        password: ''
      },
      emailValid: false
    }
  },
  methods: {
    validateEmail () {
      this.emailValid = emailValidation(this.credentials.email)
    },
    signInAndForwardToDashboard (e) {
      e.preventDefault()
      this.$router.push({name: 'dashboard'})
    }
  },
  computed: mapState({
    modals: state => state.modals
  }),
  watch: {
    'credentials.email' () {
      if (this.credentials.email !== '') {
        $('.signIn__label--email').css('display', 'none')
        $('.signIn__inputBlock--email').removeClass('signIn__inputBlock--error')
        $('.signIn__input--email').removeClass('signIn__input--error')
      } else {
        $('.signIn__label--email').css('display', 'block')
        $('.signIn__inputBlock--email').addClass('signIn__inputBlock--error')
        $('.signIn__input--email').addClass('signIn__input--error')
      }
    },
    'credentials.password' () {
      if (this.credentials.password !== '') {
        $('.signIn__label--pass').css('display', 'none')
      } else {
        $('.signIn__label--pass').css('display', 'block')
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../styles/Register/signIn.styl'
</style>
