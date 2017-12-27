<template>
  <form class="signUp" method="post" action="#">
    <h3 class="signUp__title">Регистрируйтесь через социальные сети <br>в ОДИН клик!</h3>
    <span class="signUp__text">Мы покажем события интересные именно вам</span>
    <ul class="signUp__socials">
      <li class="signUp__social signUp__social--fb">
        <img class="signUp__icon signUp__icon--fb" src="../../img/fbIcon.svg" alt="">
      </li>
      <li class="signUp__social signUp__social--vk">
        <img class="signUp__icon signUp__icon--vk" src="../../img/vkIcon.svg" alt="">
      </li>
      <li class="signUp__social signUp__social--goo">
        <img class="signUp__icon signUp__icon--goo" src="../../img/gooIcon.svg" alt="">
      </li>
    </ul>

    <div class="signUp__inputBlock">
      <i class="material-icons signUp__icon signUp__icon--name">person</i>
      <input class="signUp__input signUp__input--name" id="name" type="name" name="name" value="" required
             v-model="credentials.name">
      <label class="signUp__label signUp__label--name" for="name">Введите полное имя</label>
    </div>

    <div class="signUp__inputBlock signUp__inputBlock--phone">
      <i class="material-icons signUp__icon signUp__icon--phone">phone</i>
      <input class="signUp__input signUp__input--phone" id="phone" type="phone" name="phone" value="" required
             v-model="credentials.phone"
             @input="validatePhone">
      <label class="signUp__label signUp__label--phone" for="phone">Номер телефона</label>
      <transition name="fade">
        <div class="signUp__warnBlock"
             v-if="!phoneValid">
          <i class="material-icons signUp__icon signUp__icon--warn">warning</i>
          <span class="signUp__warn">Введите корректный номер</span>
        </div>
      </transition>
    </div>

    <div class="signUp__inputBlock signUp__inputBlock--email">
      <i class="material-icons signUp__icon signUp__icon--email">email</i>
      <input class="signUp__input signUp__input--email" id="email" type="email" name="email" value="" required
             v-model="credentials.email"
             @input="validateEmail">
      <label class="signUp__label signUp__label--email" for="email">Адрес электронной почты</label>
      <transition name="fade">
        <div class="signUp__warnBlock"
             v-if="!emailValid">
          <i class="material-icons signUp__icon signUp__icon--warn">warning</i>
          <span class="signUp__warn">Введите корректный email</span>
        </div>
      </transition>
    </div>

    <button class="signUp__btn" type="submit" name="button"
            @click="signUpAndForwardToDashboard($event)">Зарегистрироваться</button>
  </form>
</template>

<script>
import { mapState } from 'vuex'
import * as validation from '../../utils-convenience'
import $ from 'jquery'
export default {
  name: 'signUp',
  data () {
    return {
      credentials: {
        name: '',
        phone: '',
        email: ''
      },
      emailValid: true,
      phoneValid: true
    }
  },
  methods: {
    validateEmail () {
      this.emailValid = validation.emailValidation(this.credentials.email)
      if (this.emailValid) {
        $('.signUp__inputBlock--email').removeClass('signUp__inputBlock--error')
        $('.signUp__input--email').removeClass('signUp__input--error')
      } else {
        $('.signUp__inputBlock--email').addClass('signUp__inputBlock--error')
        $('.signUp__input--email').addClass('signUp__input--error')
      }
    },
    validatePhone () {
      this.phoneValid = validation.phoneValidation(this.credentials.phone)
      if (this.phoneValid) {
        $('.signUp__inputBlock--phone').removeClass('signUp__inputBlock--error')
        $('.signUp__input--phone').removeClass('signUp__input--error')
      } else {
        $('.signUp__inputBlock--phone').addClass('signUp__inputBlock--error')
        $('.signUp__input--phone').addClass('signUp__input--error')
      }
    },
    signUpAndForwardToDashboard (e) {
      e.preventDefault()
      this.$router.push({name: 'dashboard'})
    }
  },
  computed: mapState({
    modals: state => state.modals
  }),
  watch: {
    'credentials.name' () {
      if (this.credentials.name !== '') {
        $('.signUp__label--name').css('display', 'none')
      } else ($('.signUp__label--name').css('display', 'block'))
    },
    'credentials.phone' () {
      if (this.credentials.phone !== '') {
        $('.signUp__label--phone').css('display', 'none')
      } else {
        $('.signUp__label--phone').css('display', 'block')
      }
    },
    'credentials.email' () {
      if (this.credentials.email !== '') {
        $('.signUp__label--email').css('display', 'none')
      } else {
        $('.signUp__label--email').css('display', 'block')
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../styles/Register/signUp.styl'
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
