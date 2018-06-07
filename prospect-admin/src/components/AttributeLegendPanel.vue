<template>
  <div class="row">
    <h4 class="col-md-12">Attribute Legends - {{ typeDecode[type] }}</h4>
    {{ legend }}
    <div class="col-md-6">
      <div v-if="type === 'V'">
        <draggable v-model="legend">
          <div v-for="(item, index) in legend">
            <color-picker
              :index="index"
              :isSubItem="false"
              :parentIndex="null"/>
            <div class="legend">{{ item.l }}</div>
            <span class="delete" @click="deleteLegend(index)">X</span>
            <draggable v-model="item.z">
              <div class="sub-items" v-if="item.z" v-for="(subitem, sindex) in item.z">
                <color-picker
                  :index="sindex"
                  :isSubItem="true"
                  :parentIndex="index" />
                <div class="legend">{{ subitem.l }}</div>
              </div>
            </draggable>
          </div>
        </draggable>
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
    // if the legend is the subitem (2nd level), pass the parentindex to it
    // and set isSubItem = true
    onColorChosen(color, index, isSubItem, parentIndex) {
      console.log(color, index, isSubItem, parentIndex)
      this.$store.commit('setColor', {
        color: color, 
        index: index,
        isSubItem: isSubItem,
        parentIndex: parentIndex
        });
    },
    deleteLegend(index) {
      this.$store.commit('deleteLegend', index)
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
</style>
