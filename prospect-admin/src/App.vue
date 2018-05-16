<template>
  <div id="app">
    <navbar />
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 sidebar d-none d-md-block bg-light">
          <sidebar />
        </div>
        <main role="main" class="col-md-10 ml-sm-auto px-4">
          <router-view/>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
export default {
  name: 'App',
  components: {
    'navbar': Navbar,
    'sidebar': Sidebar
  }
}
</script>

<style>
#app {
  font-family: -apple-system, "Helvetica Neue", "Arial", "Helvetica", " Segoe UI", "PingFang SC", "Hiragino Sans GB", "STHeiti", "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif;
  -webkit-font-smoothing: antialiased;
}
main {
  padding-top: 90px;
}
.sidebar{
  position: fixed;
}
</style>
