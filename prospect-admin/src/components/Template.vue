<template>
  <div>
    <h2>Edit Template - {{ $route.params.id }}</h2>
    <hr>
    <div>
      {{ info }}
    </div>
  </div>
</template>
<script>
import $ from 'axios'
import data from '../data.model'
export default {
  components: {
  },
  data () {
    return {
      externalLabel: null,
      data: data
    }
  },
  computed: {
    info () {
      return this.$store.state.template;
    }
  },
  mounted () {
    this.getInfo(this.$route.params.id)
  },
  beforeRouteUpdate (to, from, next) {
    this.getInfo(to.params.id)
    next()
  },
  methods: {
    getInfo (params) {
      this.$store.commit('setTemplate', params);
    },
    onClickBack () {
      this.$store.commit('clearTemplate')
      this.$router.push('/templates')
    },
    resetAttribute () {
      this.getInfo(this.$route.params.id)
    }
  }
}
</script>
