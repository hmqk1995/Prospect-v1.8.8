<template>
  <div class="colorpicker">
    <div class="input-group">
      <div class="input-group-prepend">
        <div class="colorbox" :style="{'background': chosenColor}" @click="togglePanel"></div>
        <!-- <span class="colorlabel">{{ chosenColor }}</span> -->
      </div>
      <input readonly placeholder="Color" type="text" class="colorinfo form-control" v-model="chosenColor" />
    </div>
    <chrome-picker :class="{'bottom': isPositionBottom, 'top': !isPositionBottom}" v-if="toggle" :value="chosenColor" @input="updateValue" />
  </div>
</template>
<script>
import { Chrome } from 'vue-color'
export default {
  props: ['index', 'isSubItem', 'parentIndex', 'legend'],
  components: {
    'chrome-picker': Chrome
  },
  data () {
    return {
      toggle: false,
      isPositionBottom: false,
      storedColor: '#000000'
    }
  },
  computed: {
    chosenColor: {
      get() {
        if (this.legend) {
          if (!this.isSubItem)
            return this.$store.state.attribute.legend[this.index].v
          else
            return this.$store.state.attribute.legend[this.parentIndex].z[this.index].v
        } else {
          return this.storedColor;
        }
      },
      set(color) {
        if (this.legend) {
          this.$store.commit('setColor', {
            color: color,
            index: this.index,
            parentIndex: this.parentIndex,
            isSubItem: this.isSubItem
          });
        }
      }
    }
  },
  methods: {
    updateValue(color) {
      this.chosenColor = color.hex.toLowerCase()
      this.storedColor = color.hex.toLowerCase()
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
