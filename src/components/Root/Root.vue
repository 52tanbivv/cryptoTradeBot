<template>
  <div class="root">
    <navbar></navbar>
    <mainContent></mainContent>
    <foo></foo>
    <preloader v-if="this.preloader"></preloader>
  </div>
</template>

<script>
import Navbar from '../Navbar'
import MainContent from './MainContent'
import Preloader from '../Preloader'
import Foo from '../Foo'
import { mapState } from 'vuex'
import vueMethods from '../../mixins/methods'
// import $ from 'jquery'

export default {
  name: 'root',
  components: {
    Navbar,
    MainContent,
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
@import '../../styles/Root/root'
</style>
