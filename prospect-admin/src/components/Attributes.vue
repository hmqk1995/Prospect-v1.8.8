<template>
  <div>
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th width="5%" scope="col">#</th>
          <th width="20%" scope="col">Attribute ID</th>
          <th width="20%" scope="col">Attribute Name</th>
          <th width="55%" scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in info" :key=index>
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.id }}</td>
          <td>{{ item.post_name }}</td>
          <td>@mdo</td>
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
