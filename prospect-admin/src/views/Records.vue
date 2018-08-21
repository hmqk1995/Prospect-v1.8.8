<template>
  <div>
    <div class="d-flex flex-wrap">
      <div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Add A New Record</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </div>
        </div>
      </div>
      <div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Add A New Record</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </div>
        </div>
      </div>
    </div>
    <select v-model="selected">
      <option disabled value="">Select a Template</option>
      <option v-for="(item, index) in sortedInfo" :key=index>{{ item.id }}</option>
      </select>
      <div>Selected Template: {{ selected }}</div>

    <table class="table table-striped table-sm table-bordered">
      <thead class="thead-dark">
        <tr>
          <th width="2%" scope="col"></th>
          <th @click="sort('id')" width="10%" scope="col">Template</th>
          <th width="10%" scope="col">Records</th>
          <th width="10%" scope="col">Column 3</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in sortedInfo" :key=index>
          <th scope="row"><input type="checkbox"></th>
          <td><router-link :to="'/record/' + item.id ">{{ item.id }}</router-link></td>
          <td v-if= "item.recordData" v-for="(record, index2) in item.recordData"> {{ item.recordData[index2].l }}</td>
          <td v-else>No record data</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>
<script>
import $ from 'axios'
import model from '../data.model'
export default {
  name: 'Records',
  data () {
    return {
      info: [],
      records: [],
      type: model.type,
      currentSort: 'id',
      currentSortDir:'asc',
      selected: 'Select a Template'
    }
  },
  methods: {
    sort (name) {
      //if s == current sort, reverse
      if(name === this.currentSort) {
        this.currentSortDir = this.currentSortDir=== 'asc' ? 'desc' : 'asc';
      }
      this.currentSort = name;
      console.log(this.currentSort);
    },
    getRecords(template){

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
         console.log(_a, _b)
        if(_a < _b) return -1 * modifier;
        if(_a > _b) return 1 * modifier;
        return 0;
      })
    },
    recordData() {
      let arr = [];
      for(let i = 0; i < this.info.length; i++){
        if(this.info[i].recordData){
          console.log(this.info[i].recordData.length);
          arr.push(this.info[i].recordData);
        }
    }
    console.log(arr);
    return arr;
  }
  },
  created () {
    $.get(_restUrl + 'prsp/v1/templates')
      .then((tResponse) => {
          tResponse.data.forEach(function(element, i){
            if(tResponse.data[i]["n"] != 0){
            $.get(_restUrl + 'prsp/v1/records/' + element.id + '&0&' + tResponse.data[i]["n"])
            .then((rResponse) => {
            element.recordData = rResponse.data
            //console.info(JSON.stringify(element.recordData))
          })
          .catch((error) => {
            console.log(error)
          })
        }
        })
        this.info = tResponse.data
        console.info(JSON.stringify(this.info[0]))
      })
      .catch((error) => {
        console.log(error)
      })
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
