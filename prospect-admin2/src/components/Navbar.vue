<template>
  <div class="navbar fixed-top shadow">
    <div class="navbar-brand">
      <h3>ProspectAdmin <em>- {{ blogname }}</em></h3>
    </div>
  </div>
</template>

<script>
import $ from 'axios'
export default {
  name: 'Navbar',
  data () {
    return {
      blogname: null
    }
  },
  mounted () {
    $.get('http://localhost/cdh/wp-json')
      .then((response) => {
        this.blogname = response.data.name
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  color: #fff;
  font-weight: 700;
  font-size: 1.2rem;
}

em {
  font-size: 1.1rem;
  font-weight: 400;
}

.navbar {
background: #0077d3;
background: -moz-linear-gradient(top, #0077d3 0%, #0a94ff 100%);
background: -webkit-linear-gradient(top, #0077d3 0%,#0a94ff 100%);
background: linear-gradient(to bottom, #0077d3 0%,#0a94ff 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0077d3', endColorstr='#0a94ff',GradientType=0 );
}
</style>
