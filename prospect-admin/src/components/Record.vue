<template>
  <div>
    <h2>Edit Record - {{ info.title.rendered }}</h2>
    <hr>
    <div>
      {{ info }}
      <form v-if="info">
      </form>
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
      return this.$store.state.record;
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
      this.$store.commit('setRecord', params);
    },
    onUpdateInfo (params) {
      $.post(_restUrl + 'prsp/v1/attribute/' + params, this.info, {
        headers: {'X-WP-Nonce': _nonce}
      })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    onClickBack () {
      this.$store.commit('clearRecord')
      this.$router.push('/records')
    },
    resetRecord () {
      this.getInfo(this.$route.params.id)
    }
  }
}
</script>

<style>
</style>
