<template>
  <div class="colorpicker">
    <div class="input-group">
      <div class="input-group-prepend">
        <div class="colorbox" :style="{'background': chosenColor}" @click="togglePanel"></div>
        <!-- <span class="colorlabel">{{ chosenColor }}</span> -->
      </div>
      <input readonly type="text" class="colorinfo form-control" v-model="chosenColor" />
    </div>
    <chrome-picker :class="{'bottom': isPositionBottom, 'top': !isPositionBottom}" v-if="toggle" :value="chosenColor" @input="updateValue" />
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
      isPositionBottom: false
    }
  },
  methods: {
    updateValue(color) {
      this.chosenColor = color.hex
      this.$emit('colorChosen', this.chosenColor)
    },
    togglePanel(e) {
      this.toggle = !this.toggle
      console.log(e)
      if (window.innerHeight - e.clientY < 200) {
        this.isPositionBottom = true
      }
    }
  }
}
</script>

<style scoped>
.colorpicker, .colorlabel, .colorbox {
  display: inline-block;
}
.colorpicker {
  position: relative;
}
.top {
  top: 40px;
}
.bottom {
  bottom: 40px;
}
.colorbox {
  height: 100%;
  width: 35px;
  background: #111;
}
.vc-chrome {
  position: absolute;
  z-index: 1000;
}
.colorinfo {
  width: 90px;
}
</style>
