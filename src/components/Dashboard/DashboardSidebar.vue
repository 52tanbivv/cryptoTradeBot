<template>
  <md-app-drawer md-permanent="full" class="dashboardSidebar md-drawer md-app-drawer md-theme-demo-light">
    <md-toolbar class="md-transparent md-primary" md-elevation="0">
    </md-toolbar>
    <ul class="dashboardSidebar__list md-list md-theme-demo-light">
      <md-list-item class="dashboardSidebar__item dashboardSidebar__item--account"
                    @click="goToAccountView($event)">
        <img class="dashboardSidebar__icon" src="../../img/account_circle.svg" alt="">
        <span class="dashboardSidebar__text md-list-item-text">Account</span>
      </md-list-item>
      <md-list-item class="dashboardSidebar__item"
                    @click="goToStatisticsView($event)">
        <img class="dashboardSidebar__icon" src="../../img/stat.svg" alt="">
        <span class="dashboardSidebar__text md-list-item-text">Statistics</span>
      </md-list-item>
      <md-list-item class="dashboardSidebar__item"
                    @click="goToTraidingView($event)">
        <img class="dashboardSidebar__icon" src="../../img/trade.svg" alt="">
        <span class="dashboardSidebar__text md-list-item-text">Trading</span>
      </md-list-item>
    </ul>
  </md-app-drawer>
</template>

<script>
import { mapState } from 'vuex'
import vueMethods from '../../mixins/methods'
import $ from 'jquery'

export default {
  name: 'dashboardSidebar',
  components: {
  },
  mixins: [vueMethods],
  data () {
    return {

    }
  },
  methods: {
    goToAccountView (e) {
      let item = $(e.target).parent().parent().parent()
      console.log(item)
      let hasClass = item.hasClass('dashboardSidebar__item--current')
      let hasOtherClass = item.hasClass('dashboardSidebar__list')
      console.log('hasClass ', hasClass)
      console.log('hasOtherClass ', hasOtherClass)
      if (!hasClass && !hasOtherClass) {
        $('.dashboardSidebar__item').removeClass('dashboardSidebar__item--current')
        item.addClass('dashboardSidebar__item--current')
        this.$router.push({name: 'account'})
      }
    },
    goToStatisticsView (e) {
      let item = $(e.target).parent().parent().parent()
      console.log(item)
      let hasClass = item.hasClass('dashboardSidebar__item--current')
      let hasOtherClass = item.hasClass('dashboardSidebar__list')
      console.log('hasClass ', hasClass)
      console.log('hasOtherClass ', hasOtherClass)
      if (!hasClass && !hasOtherClass) {
        $('.dashboardSidebar__item').removeClass('dashboardSidebar__item--current')
        item.addClass('dashboardSidebar__item--current')
        this.$router.push({name: 'statistics'})
      }
    },
    goToTraidingView (e) {
      let item = $(e.target).parent().parent().parent()
      console.log(item)
      let hasClass = item.hasClass('dashboardSidebar__item--current')
      let hasOtherClass = item.hasClass('dashboardSidebar__list')
      console.log('hasClass ', hasClass)
      console.log('hasOtherClass ', hasOtherClass)
      if (!hasClass && !hasOtherClass) {
        $('.dashboardSidebar__item').removeClass('dashboardSidebar__item--current')
        item.addClass('dashboardSidebar__item--current')
        this.$router.push({name: 'traiding'})
      }
    }
  },
  beforeCreate () {
  },
  mounted () {
    $('.dashboardSidebar__item--account').addClass('dashboardSidebar__item--current')
  },
  computed: mapState({
    preloader: state => state.onload.preloader
  })
}
</script>

<style scoped lang="stylus">
@import '../../styles/Dashboard/dashboardSidebar'
</style>
