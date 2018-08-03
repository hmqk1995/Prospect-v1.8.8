<template>
  <div>
    <div class="d-flex flex-wrap">
      <div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Add A New Attribute</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </div>
        </div>
      </div>
      <div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Add A New Attribute</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </div>
        </div>
      </div>
    </div>
    <table class="table table-striped table-sm table-bordered">
      <thead class="thead-dark">
        <tr>
          <th width="2%" scope="col"></th>
          <th @click="sort('id')" width="10%" scope="col">Attribute ID</th>
          <th @click="sort('def.t')" width="8%" scope="col">Type</th>
          <th @click="sort('def.l')" width="20%" scope="col">Attribute Label</th>
          <th width="65%" scope="col">Legend</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in sortedInfo" :key=index>
          <th scope="row"><input type="checkbox"></th>
          <td><router-link :to="'/attribute/' + item.id ">{{ item.id }}</router-link></td>
          <td>{{ type[item.def.t] }}</td>
          <td>{{ item.def.l }}</td>
          <td>
            <template v-for="(legend, index) in item.legend">
              <div class="legend-area" :style="{background: legend.v}" :key="'l_' + index">{{ legend.l }}</div>
              <div v-for="legend in legend.z" class="legend-area sub" :style="{background: legend.v, verticalAlign: 'bottom'}">{{ legend.l }}</div>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import $ from 'axios'
import model from '../data.model'
export default {
  name: 'Attributes',
  data () {
    return {
      info: [],
      type: model.type,
      currentSort: 'id',
      currentSortDir:'asc'
    }
  },
  methods: {
    sort (name) {
      //if s == current sort, reverse
      if(name === this.currentSort) {
        this.currentSortDir = this.currentSortDir=== 'asc' ? 'desc' : 'asc';
      }
      this.currentSort = name;
    }
  },
  computed: {
    sortedInfo () {
      return this.info.sort((a, b) => {
        let properties = this.currentSort.split('.');
        let modifier = 1;
        let _a = a;
        let _b = b;
        if(this.currentSortDir === 'desc') modifier = -1;
        while(properties.length > 0) {
          _a = _a[properties[0]];
          _b = _b[properties[0]];
          properties.shift();
        }
        // console.log(_a, _b)
        if(_a < _b) return -1 * modifier;
        if(_a > _b) return 1 * modifier;
        return 0;
      })
    }
  },
  created () {
    $.get(_restUrl + 'prsp/v1/attributes')
      .then((response) => {
        console.log(response.data)
        this.info = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    // $.post('http://localhost/cdh/wp-json/wp/v2/posts/4221', {
    //   'title': 'Hello Moon1'
    // }, {
    //   headers: {'X-WP-Nonce': _nonce}
    // })
    //   .then((response) => {
    //     console.log(response)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  },
  mounted () {

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
table {
  margin-top: 20px;
}
.legend-area {
  display: inline-block;
  min-width: 100px;
  color: #fff;
  box-sizing: border-box;
  padding: 5px 10px;
}
.sub {
  padding: 0 5px;
  width: auto;
  min-width: 0;
  font-size: 0.85rem;
}
</style>
