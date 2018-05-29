<template>
  <div class="colorpicker">
    <span class="colorlabel">{{ chosenColor }}</span>
    <div class="colorbox" :style="{'background': chosenColor}"></div>
    <chrome-picker :value="chosenColor" @input="updateValue" />
  </div>
</template>
<script>
import { Chrome } from 'vue-color'
export default {
  props: ['color'],
  components: {
    'chrome-picker': Chrome
  },
  data () {
    return {
      chosenColor: this.color,
      toggle: false,
    }
  },
  methods: {
    updateValue(color) {
      this.chosenColor = color.hex;
    }
  }
}
</script>

<style scoped>
.colorpicker, .colorlabel, .colorbox {
  display: inline-block;
}
.colorbox {
  height: 30px;
  width: 30px;
  background: #111;
}
</style>
