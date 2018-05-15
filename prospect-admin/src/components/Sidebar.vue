<template>
  <div class="sidebar-sticky">
    <ul class="nav flex-column">
      <li class="nav-item">
        <a href="#" class="nav-link active">Dashboard</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Attributes</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Templates</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Records</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Exhibits</a>
      </li>
    </ul>
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
    padding-top: 90px;
}
li {
  font-size: 1.2rem;
  font-weight: 400;
}
@media(min-width: 768px) {
   .sidebar-sticky {
        min-height: 100vh;
        box-sizing: border-box;
    }
}
</style>
