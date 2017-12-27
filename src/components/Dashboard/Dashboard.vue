<template>
  <div class="dashboard">
    <navbar></navbar>
    <div class="dashboard__contentWrapper">
      <dashboardSidebar></dashboardSidebar>
      <dashboardContent></dashboardContent>
    </div>
    <foo></foo>
    <preloader v-if="this.preloader"></preloader>
  </div>
</template>

<script>
import Navbar from '../Navbar'
import DashboardContent from './DashboardContent'
import DashboardSidebar from './DashboardSidebar'
import Preloader from '../Preloader'
import Foo from '../Foo'
import { mapState } from 'vuex'
import vueMethods from '../../mixins/methods'
// import $ from 'jquery'

export default {
  name: 'dashboard',
  components: {
    Navbar,
    DashboardContent,
    DashboardSidebar,
    Foo,
    Preloader
  },
  mixins: [vueMethods],
  data () {
    return {

    }
  },
  mounted () {
  },
  beforeCreate () {
  },
  computed: mapState({
    preloader: state => state.onload.preloader
  })
}
</script>

<style scoped lang="stylus">
@import '../../styles/Dashboard/dashboard'
</style>
