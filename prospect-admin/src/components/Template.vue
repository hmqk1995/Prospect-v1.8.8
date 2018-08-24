<template>
  <div>
    <h2>Edit Template - {{ $route.params.id }}</h2>
    <hr>
    <div>
      {{ info }}
    </div>
  <div class="form-group row">
    <label class="col-md-2" for="uniqueid">Internal id:</label>
    <div class="col-md-4">
      <input
        type="text"
        class="form-control"
        id="uniqueid"
        aria-describedby="emailHelp"
        placeholder="Enter Unique ID"
        v-model="info.id"
        disabled>
    </div>
    <small class="col-md-6 form-text text-muted">You must supply an internal ID for the new Template. It must only consist of alphabetic characters (in plain ASCII), numbers, underscores and hyphens (it cannot contain spaces, punctuation, Unicode-only characters, etc).</small>
  </div>
  <div class="form-group row">
    <label class="col-md-2" for="externallabel">External id:</label>
    <div class="col-md-4">
      <input
        type="text"
        class="form-control"
        externalLabel="externallabel"
        aria-describedby="external label"
        placeholder="Enter External id"
        v-model="info.def.l">
    </div>
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
    resetTemplate () {
      this.getInfo(this.$route.params.id)
    }
  }
}
</script>
