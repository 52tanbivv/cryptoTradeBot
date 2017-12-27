import $ from 'jquery'
module.exports = {
  methods: {
    showSignUpModal (e) {
      e.preventDefault()
      this.$store.dispatch('showRegistrationModal')
      this.$store.dispatch('showSignUpForm')
      this.$nextTick(function () {
        var signUp = $('.registration__tab--signUp')
        console.log(signUp)
        signUp.css('box-shadow', 'none')
        signUp.addClass('registration__tab--current')
        signUp.siblings().css('box-shadow', 'inset -1px -1px 1px 1px rgba(38,38,43,0.4)')
        signUp.siblings().removeClass('registration__tab--current')
      })
    },
    showSignInModal (e) {
      e.preventDefault()
      this.$store.dispatch('showRegistrationModal')
      this.$store.dispatch('showSignInForm')
      this.$nextTick(function () {
        var signIn = $('.registration__tab--signIn')
        signIn.css('box-shadow', 'none')
        signIn.addClass('registration__tab--current')
        signIn.siblings().css('box-shadow', 'inset 1px -1px 1px 1px rgba(38,38,43,0.4)')
        signIn.siblings().removeClass('registration__tab--current')
      })
    }
  }
}
