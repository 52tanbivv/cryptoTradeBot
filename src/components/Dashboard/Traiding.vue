<template>
  <div class="traiding">
    <md-switch v-model="boolean" class="md-primary">
      <span v-if="this.boolean === false">Подключиться к бирже</span>
      <span v-else>Отключить робота</span>
    </md-switch>
    <div class="traiding__inputsBlock">
      <md-field class="traiding__inputBlock">
        <label>Your Balance in BTC</label>
        <md-input v-model="balanceInBtc" readonly></md-input>
      </md-field>
      <md-field class="traiding__inputBlock">
        <label>BTC/USD</label>
        <md-input v-model="exchangeRateBtcToUsd" readonly></md-input>
      </md-field>
      <md-field class="traiding__inputBlock">
        <label>Your Balance in USD</label>
        <md-input v-model="balanceInUsd" readonly></md-input>
      </md-field>
    </div>
    
    <h2>Coins to sell</h2>
    <div class="traiding__row"
         v-for="coin in coins"
         v-if="coin.lastDeal === 'buy'">
      <h3>{{coin.name}}</h3>
      <div class="traiding__inputsBlock">
        <md-field class="traiding__inputBlock">
          <label>Coin bought for:</label>
          <md-input v-model="coin.lastBid" readonly></md-input>
        </md-field>
        <md-field class="traiding__inputBlock">
          <label>Current Ask:</label>
          <md-input v-model="coin.currentAsk" readonly></md-input>
        </md-field>
        <md-field class="traiding__inputBlock">
          <label>BTC/{{coin.name}}</label>
          <md-input v-model="coin.rate" readonly></md-input>
        </md-field>
        <md-field class="traiding__inputBlock">
          <label>Your Balance in {{coin.name}}</label>
          <md-input v-model="coin.balance" readonly></md-input>
        </md-field>
      </div>
    </div>

    <md-divider></md-divider>

    <h2>Coins to buy</h2>
    <div class="traiding__row"
         v-for="coin in coins"
         v-if="coin.lastDeal === 'sell'">
      <h3>{{coin.name}}</h3>
      <div class="traiding__inputsBlock">
        <md-field class="traiding__inputBlock">
          <label>Coin bought for:</label>
          <md-input v-model="coin.lastBid" readonly></md-input>
        </md-field>
        <md-field class="traiding__inputBlock">
          <label>Coin sold for:</label>
          <md-input v-model="coin.lastAsk" readonly></md-input>
        </md-field>
        <md-field class="traiding__inputBlock">
          <label>BTC/{{coin.name}}</label>
          <md-input v-model="coin.rate" readonly></md-input>
        </md-field>
        <md-field class="traiding__inputBlock">
          <label>Your Balance in {{coin.name}}</label>
          <md-input v-model="coin.balance" readonly></md-input>
        </md-field>
      </div>
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
      balanceInBtc: 'Deposit money to start',
      boolean: false,
      coins: [{
        lastDeal: 'sell',
        name: 'Monero',
        lastBid: 0.006,
        currentAsk: 0.0065,
        rate: 0.30,
        balance: 11,
        currentMarketRate: 1
      },
      {
        lastDeal: 'buy',
        name: 'Ripple',
        lastBid: 0.006,
        currentAsk: 0.0065,
        rate: 0.00006766,
        balance: 255,
        currentMarketRate: 17
      },
      {
        lastDeal: 'sell',
        name: 'Dash',
        lastBid: 0.006,
        currentAsk: 0.0065,
        rate: 0.30,
        balance: 11,
        currentMarketRate: 19
      },
      {
        lastDeal: 'buy',
        name: 'Bitcoin Cash',
        lastBid: 0.006,
        currentAsk: 0.0065,
        rate: 0.00006766,
        balance: 255,
        currentMarketRate: 22
      },
      {
        lastDeal: 'sell',
        name: 'IOTA',
        lastBid: 0.006,
        currentAsk: 0.0065,
        rate: 0.30,
        balance: 11,
        currentMarketRate: 19
      },
      {
        lastDeal: 'buy',
        name: 'Bitcoin Gold',
        lastBid: 0.006,
        currentAsk: 0.0065,
        rate: 0.00006766,
        balance: 255,
        currentMarketRate: 22
      }]
    }
  },
  mixins: [vueMethods],
  methods: {
  },
  watch: {
    boolean () {
      let boolean = this.boolean
      if (boolean) {
        console.log('send request to connect')
      } else {
        console.log('send request to disconnect')
      }
    }
  },
  computed: mapState({
  })
}
</script>

<style media="screen" lang="stylus">
@import '../../styles/Dashboard/traiding'

</style>
