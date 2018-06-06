<template>
  <div>
    <h4>Attribute Legends</h4>
    {{ legend }}
    <div>
      <div v-for="item in legend">
        <color-picker :color="item.v" />
        <div class="legend">{{ item.l }}</div>
        <div class="sub-items" v-if="item.z" v-for="subitem in item.z">
          <color-picker :color="subitem.v" />
          <div class="legend">{{ subitem.l }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Colorpicker from './Colorpicker'
export default {
  props: ['legend'],
  components: {
    'color-picker': Colorpicker
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
