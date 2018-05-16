<template>
  <div>
    <div class="d-flex flex-wrap">
      <div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Add A New Attribute</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Add A New Attribute</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Add A New Attribute</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Add A New Attribute</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
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
.d-flex > div {
  flex: 0 0 50%;
  box-sizing: border-box;
}
.card {
  margin: 10px;
  background: #f1f8ff;
  background: -moz-linear-gradient(top, #f1f8ff 0%, #d8ebff 100%);
  background: -webkit-linear-gradient(top, #f1f8ff 0%,#d8ebff 100%);
  background: linear-gradient(to bottom, #f1f8ff 0%,#d8ebff 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f1f8ff', endColorstr='#d8ebff',GradientType=0 );
  border: none;
}
</style>
