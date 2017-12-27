<template>
  <div class="account">
    <md-field>
      <label>Your Balance in BTC</label>
      <md-input v-model="balanceInBtc" readonly></md-input>
    </md-field>
    <md-field>
      <label>New password</label>
      <md-input v-model="password"></md-input>
    </md-field>
    <md-field>
      <label>Repeat password</label>
      <md-input v-model="passwordConf" ></md-input>
    </md-field>
  </div>
</template>

<script>
// import $ from 'jquery'
import vueMethods from '../../mixins/methods'
import { mapState } from 'vuex'
export default {
  name: 'account',
  components: {
  },
  data () {
    return {
      balanceInBtc: 'Deposit money to start'
    }
  },
  mixins: [vueMethods],
  methods: {
  },
  computed: mapState({
  })
}
</script>

<style media="screen" lang="stylus">
@import '../../styles/Dashboard/account'
</style>
