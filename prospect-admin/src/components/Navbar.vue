<template>
  <div class="navbar fixed-top bg-dark shadow">
    <div class="navbar-brand">
      <h2>ProspectAdmin <em>- {{ blogname }}</em></h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      blogname: 'My Blog'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  color: #93afe6;
  font-weight: 700;
}

em {
  font-size: 1.5rem;
  font-weight: 400;
}
</style>
