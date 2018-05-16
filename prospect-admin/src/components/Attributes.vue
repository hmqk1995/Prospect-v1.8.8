<template>
  <div>
    <table class="table table-striped table-bordered table-sm">
      <thead class="thead-dark">
        <tr>
          <th width="5%" scope="col"></th>
          <th width="10%" scope="col">Attribute ID</th>
          <th width="20%" scope="col">Attribute Name</th>
          <th width="65%" scope="col">Operate</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in info" :key=index>
          <th scope="row"><input type="checkbox"></th>
          <td>{{ item.id }}</td>
          <td>{{ item.post_name }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import $ from 'axios'
export default {
  name: 'Attributes',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    $.get('http://localhost/cdh/wp-json/prsp/v1/attributes')
      .then((response) => {
        console.log(response.data)
        this.info = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
</style>
