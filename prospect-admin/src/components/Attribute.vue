<template>
  <div>
    <h2>Edit Attribute - {{ $route.params.id }}</h2>
    <hr>
    <div>
      <form>
        <div class="form-group row">
          <label class="col-md-2" for="input3">Unique ID</label>
          <div class="col-md-4">
            <input
              type="text"
              class="form-control"
              id="input3"
              aria-describedby="emailHelp"
              placeholder="Enter Unique ID"
              v-model="info.id"
              disabled>
            <small class="form-text text-muted">An Attribute internal ID must consist of alphabetic characters (in plain ASCII), numbers, underscores and hyphens (it cannot contain spaces, punctuation, Unicode-only characters, etc).</small>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2" for="input1">External Label</label>
          <div class="col-md-4">
            <input
              type="text"
              class="form-control"
              id="input1"
              aria-describedby="external label"
              placeholder="Enter External Label"
              v-model="info.def.l">
            <small class="form-text text-muted">Hint messages to be edited.</small>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2" for="input2">Privacy</label>
          <div class="col-md-4">
            <select class="custom-select" id="input2" v-model="info.privacy">
              <option value="o">Public</option>
              <option value="p">Private</option>
            </select>
            <small class="form-text text-muted">Hint messages to be edited.</small>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2" for="exampleInput3">Value Delimiter</label>
          <div class="col-md-4">
            <input
              style="width: 40px;"
              type="text"
              class="form-control"
              id="exampleInput4"
              aria-describedby="emailHelp"
              v-model="info.def.d">
            <small class="form-text text-muted">single character or blank.</small>
          </div>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          v-on:click.prevent="onUpdateInfo($route.params.id)">Update</button>
        <button class="btn btn-secondary" @click="onClickBack">Back</button>
      </form>
    </div>
  </div>
</template>

<script>
import $ from 'axios'
export default {
  data () {
    return {
      info: null,
      externalLabel: null
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
      $.get('http://localhost/cdh/wp-json/prsp/v1/attribute/' + params)
        .then((response) => {
          console.log(response.data)
          this.info = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    onUpdateInfo (params) {
      $.post('http://localhost/cdh/wp-json/prsp/v1/attribute/' + params, this.info, {
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
      this.$router.push('/attributes')
    }
  }
}
</script>

<style>
</style>
