<template>
  <div>
    <div class="d-flex flex-wrap">
      <div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Add A New Record</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Add A New Record</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
