<template>
  <div>
    <h4>Attribute Legends</h4>
    {{ legend }}
    <div>
      <draggable v-model="legend">
        <div v-for="(item, index) in legend">
          <color-picker @colorChosen="onColorChosen($event, index, false)" :color="item.v" />
          <div class="legend">{{ item.l }}</div>
          <div class="sub-items" v-if="item.z" v-for="(subitem, sindex) in item.z">
            <color-picker @colorChosen="onColorChosen($event, sindex, true, index)" :color="subitem.v" />
            <div class="legend">{{ subitem.l }}</div>
          </div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Colorpicker from './Colorpicker'
export default {
  components: {
    'color-picker': Colorpicker,
    draggable
  },
  computed: {
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
