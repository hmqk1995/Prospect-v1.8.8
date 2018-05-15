<template>
  <div class="sidebar-sticky">
      sidebar
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      blogname: 'My Blog'
    }
  }
}
</script>

<style scoped>
.sidebar-sticky {
    padding-top: 72px;
}
@media(min-width: 768px) {
   .sidebar-sticky {
        min-height: 100vh;
        box-sizing: border-box;
    }
}
</style>
