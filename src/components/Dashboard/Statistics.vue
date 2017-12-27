<template>
  <div class="statistics">
    <md-switch v-model="boolean" class="md-primary">Подключиться к бирже</md-switch>
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
@import '../../styles/Dashboard/statistics'

</style>
