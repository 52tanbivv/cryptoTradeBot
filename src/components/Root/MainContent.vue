<template>
  <div class="main">
    <div class="main__userBlock">
      <button class="main__btn main__btn--signIn md-button md-raised md-primary md-theme-demo-light" href="#"
         @click.prop="showSignInModal">Войти</button>
      <button class="main__btn main__btn--signUp md-button md-raised md-primary md-theme-demo-light" href="#"
         @click.prop="showSignUpModal">
         <div class="md-ripple">
           <div class="md-button-content">
             Зарегистрироваться
           </div>
         </div>
       </button>
    </div>
    <registrationModal></registrationModal>
  </div>
</template>
<script>
/* import $ from 'jquery' */
import RegistrationModal from '../Register/RegistrationModal'
import vueMethods from '../../mixins/methods'
export default {
  name: 'mainContent',
  components: {
    RegistrationModal
  },
  mixins: [vueMethods],
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../styles/Root/mainContent'
</style>
