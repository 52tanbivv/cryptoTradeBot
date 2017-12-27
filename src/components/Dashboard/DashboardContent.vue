<template>
  <div class="dashboardContent">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import vueMethods from '../../mixins/methods'
// import $ from 'jquery'

export default {
  name: 'dashboardContent',
  components: {
  },
  mixins: [vueMethods],
  data () {
    return {
      boolean: true
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
@import '../../styles/Dashboard/dashboardContent'
</style>
