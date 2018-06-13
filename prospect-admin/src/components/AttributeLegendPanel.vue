<template>
  <div class="row">
    <h4 class="col-md-12">Attribute Legends - {{ typeDecode[type] }}</h4>
    {{ legend }}
    <div class="col-md-6">
      <div v-if="type === 'V'">
        <draggable v-model="legend">
          <div v-for="(item, index) in legend">
            <div class="input-group">
              <color-picker
              :index="index"
              :isSubItem="false"
              :parentIndex="null"/>
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
                    :parentIndex="index" />
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
      typeDecode: data.type
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
    }
  },
  methods: {
    deleteLegend(info) {
      this.$store.commit('deleteLegend', info)
    },
    addSubLegend($event, index) {
      this.legend[index].z.push({
        l: "",
        v: "",
        b: false
      });
    },
    addTopLegend() {
      this.legend.push({
        l: "",
        v: "",
        z: [],
        b: false
      });
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
