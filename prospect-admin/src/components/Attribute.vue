<template>
  <div>
    <h2>Edit Attribute - {{ $route.params.id }}</h2>
    <hr>
    <div>
      <form v-if="info">
        <div class="form-group row">
          <label class="col-md-2" for="uniqueid">Unique ID</label>
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
          <small class="col-md-6 form-text text-muted">An Attribute internal ID must consist of alphabetic characters (in plain ASCII), numbers, underscores and hyphens (it cannot contain spaces, punctuation, Unicode-only characters, etc).</small>
        </div>
        <div class="form-group row">
          <label class="col-md-2" for="externallabel">External Label</label>
          <div class="col-md-4">
            <input
              type="text"
              class="form-control"
              id="externallabel"
              aria-describedby="external label"
              placeholder="Enter External Label"
              v-model="info.def.l">
          </div>
          <small class="col-md-6 form-text text-muted">Hint messages to be edited.</small>
        </div>
        <div class="form-group row">
          <label class="col-md-2" for="privacy">Privacy</label>
          <div class="col-md-4">
            <select class="custom-select" id="privacy" v-model="info.privacy">
              <option value="o">Public</option>
              <option value="p">Private</option>
            </select>
          </div>
          <small class="col-md-6 form-text text-muted">Hint messages to be edited.</small>
        </div>
        <div class="form-group row">
          <label class="col-md-2" for="delimiter">Value Delimiter</label>
          <div class="col-md-4">
            <input
              style="width: 40px;"
              type="text"
              class="form-control"
              id="delimiter"
              aria-describedby="Value Delimiter"
              v-model="info.def.d">
          </div>
          <small class="col-md-6 form-text text-muted">single character or blank.</small>
        </div>
        <div class="form-group row">
          <label class="col-md-2" for="filter">Available as Filter in Exhibit</label>
          <div class="col-md-4">
            <b-form-checkbox id="checkbox1"
              v-model="info.def.f"
              unchecked-value="false" />
          </div>
          <small class="col-md-6 form-text text-muted">single character or blank.</small>
        </div>
        <div class="form-group row">
          <label class="col-md-2" for="descriptiontext">Description Text</label>
          <div class="col-md-4">
            <textarea
              type="textbox"
              class="form-control"
              id="descriptiontext"
              aria-describedby="description text"
              v-model="info.def.h">
            </textarea>
          </div>
          <small class="col-md-6 form-text text-muted">Explain attribute entry to contributor.</small>
        </div>
        <hr>
        <div class="form-group row">
          <label class="col-md-2" for="datatype">Data Type</label>
          <div class="col-md-4">
            <select
              class="custom-select"
              id="datatype"
              aria-describedby="Data Type"
              v-model="info.def.t">
               <option v-for="(item, index) in data.type" :value="index">{{ item }}</option>
            </select>
          </div>
          <small class="col-md-6 form-text text-muted">Explain attribute entry to contributor.</small>
        </div>
        <panel :legend="info.legend" />
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
import data from '../data.model'
import panel from './AttributeLegendPanel'
export default {
  components: {
    'panel': panel
  },
  data () {
    return {
      info: null,
      externalLabel: null,
      data: data
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
      $.get(_restUrl + 'prsp/v1/attribute/' + params)
        .then((response) => {
          console.log(response.data)
          this.info = response.data
        })
        .catch((error) => {
          console.log(error)
        })
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
      this.$router.push('/attributes')
    }
  }
}
</script>

<style>
</style>
