<template>
  <div class="main">
    <div class="main__userBlock">
      <md-button class="main__btn main__btn--signIn md-button md-raised md-primary"
                 @click.prop="showSignInModal">Войти</md-button>
      <md-button class="main__btn main__btn--signUp md-button md-raised md-accent"
                 @click.prop="showSignUpModal">Зарегистрироваться</md-button>
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
