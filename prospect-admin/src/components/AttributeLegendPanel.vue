<template>
  <div class="row">
    <h4 class="col-md-12">Attribute Legends - {{ typeDecode[type] }}</h4>
    <!-- {{ legend }} -->
    <div class="col-md-6">
      <div v-if="type === 'V'">
        <draggable v-model="legend">
          <div v-for="(item, index) in legend">
            <div class="input-group">
              <color-picker
              :index="index"
              :isSubItem="false"
              :parentIndex="null"
              :legend="true" />
              <input type="text" class="legend form-control" v-model="item.l"/>
              <button
                class="btn btn-success"
                @click="addSubLegend($event, index)">+</button>
              <button
                class="delete btn btn-danger"
                @click="deleteLegend({
                  index: index,
                  isSubItem: false
                })">x</button>
            </div>
            <draggable v-model="item.z">
              <div class="sub-items" v-if="item.z" v-for="(subitem, sindex) in item.z">
                <div class="input-group">
                  <color-picker
                    :index="sindex"
                    :isSubItem="true"
                    :parentIndex="index"
                    :legend="true" />
                  <input type="text" class="legend form-control" v-model="subitem.l"/>
                  <button
                    class="delete btn btn-danger"
                    @click="deleteLegend({
                      index: sindex,
                      isSubItem: true,
                      parentIndex: index
                    })">x</button>
                </div>
              </div>
            </draggable>
          </div>
        </draggable>
        <button
          class="btn btn-success"
          @click="addTopLegend">+</button>
      </div>
      <div v-if="type === 'T'">
        <draggable v-model="legend">
          <div v-for="(item, index) in legend">
            <div class="input-group">
              <color-picker
              :index="index"
              :isSubItem="false"
              :parentIndex="null"
              :legend="true" />
              <input placeholder="Label" type="text" class="legend form-control" v-model="item.l"/>
              <input placeholder="Text Pattern" type="text" class="legend form-control" v-model="item.d"/>
              <button
                class="delete btn btn-danger"
                @click="deleteLegend({
                  index: index,
                  isSubItem: false
                })">x</button>
            </div>
          </div>
        </draggable>
        <button
          class="btn btn-success"
          @click="addTopLegend">+</button>
      </div>
      <div v-if="type === 'N'">
        <div class="form-group row">
          <label class="col-md-4" for="Minimumnumber">Minimum number</label>
          <div class="col-md-8">
            <input
              type="text"
              class="form-control"
              id="Minimumnumber"
              aria-describedby="Minimum number"
              placeholder="Enter Minimum number"
              v-model="info.range.min">
          </div>
          <small class="col-md-12 form-text text-muted">Hint messages to be edited.</small>
        </div>
        <div class="form-group row">
          <label class="col-md-4" for="Maximumnumber">Maximum number</label>
          <div class="col-md-8">
            <input
              type="text"
              class="form-control"
              id="Maximumnumber"
              aria-describedby="Maximum number"
              placeholder="Enter Maximum number"
              v-model="info.range.max">
          </div>
          <small class="col-md-12 form-text text-muted">Hint messages to be edited.</small>
        </div>
        <div class="form-group row">
          <label class="col-md-4" for="Groupvalues">Group values</label>
          <div class="col-md-8 row">
            <div class="col-md-5">together by</div>
            <input
              type="number"
              class="form-control col-md-2"
              id="Groupvalues"
              aria-describedby="Group values"
              v-model="info.range.g">
              <div class="col-md-5">digits</div>
          </div>
          <small class="col-md-12 form-text text-muted">Hint messages to be edited.</small>
        </div>
        <div class="form-group row">
          <label class="col-md-4" for="filter">Use color for indefinite Number values</label>
          <div class="col-md-8">
            <b-form-checkbox id="indefiniteNumber"
              unchecked-value="false"
              v-model="indefinite" />
            <color-picker v-if="indefinite === true" />
          </div>
          <small class="col-md-5 form-text text-muted">single character or blank.</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../data.model'
import draggable from 'vuedraggable'
import Colorpicker from './Colorpicker'
export default {
  components: {
    'color-picker': Colorpicker,
    draggable
  },
  data() {
    return {
      typeDecode: data.type,
      indefinite: false
    }
  },
  computed: {
    type() {
      return this.$store.state.attribute.def.t
    },
    legend: {
      get() {
        return this.$store.state.attribute.legend
      },
      set(value) {
        console.log(value)
        return this.$store.commit('setLegendsOrder', value);
      }
    },
    info () {
      return this.$store.state.attribute;
    }
  },
  methods: {
    deleteLegend(info) {
      this.$store.commit('deleteLegend', info)
    },
    addSubLegend($event, index) {
      if (this.type === 'V') {
        this.legend[index].z.push({
          l: "",
          v: "",
          b: false
        });
      }
    },
    addTopLegend() {
      switch (this.type) {
        case 'V':
          this.legend.push({
            l: "",
            v: "",
            z: [],
            b: false
          });
          break;
        case 'T':
          this.legend.push({
            l: "",
            d: "",
            v: "",
            b: false
          });
          break;
      }
    }
  }
}
</script>

<style scoped>
.legend {
  display: inline-block;
}

.sub-items {
  padding-left: 3rem;
}

button {
  border-radius: 0;
}
</style>
