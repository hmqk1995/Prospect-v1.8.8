<template>
  <div>
    <h4>Attribute Legends</h4>
    {{ legend }}
    <div>
      <div v-for="item in legend">
        <div class="legend">{{ item.l }}</div>
        <color-picker :color="item.v" />
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
</style>
