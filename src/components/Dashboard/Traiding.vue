<template>
  <div class="traiding">
    <md-switch v-model="boolean" class="md-primary">Подключиться к бирже</md-switch>
    <div class="traiding__inputsBlock">
      <md-field class="traiding__inputBlock">
        <label>Your Balance in BTC</label>
        <md-input v-model="balanceInBtc" readonly></md-input>
      </md-field>
      <md-field class="traiding__inputBlock">
        <label>BTC/USD</label>
        <md-input v-model="balanceInBtc" readonly></md-input>
      </md-field>
      <md-field class="traiding__inputBlock">
        <label>Your Balance in USD</label>
        <md-input v-model="balanceInBtc" readonly></md-input>
      </md-field>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
import vueMethods from '../../mixins/methods'
import { mapState } from 'vuex'
export default {
  name: 'traiding',
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
@import '../../styles/Dashboard/traiding'

</style>
