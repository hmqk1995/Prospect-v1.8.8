<template>
  <div>
    <h2>Edit Attribute - </h2>
    <hr>
    <div>
      <form>
        <div class="form-group row">
          <label class="col-md-2" for="exampleInput1">External Label</label>
          <div class="col-md-4">
            <input type="email" class="form-control" id="exampleInput1" aria-describedby="emailHelp" placeholder="Enter External Label">
            <small class="form-text text-muted">Hint messages to be edited.</small>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2" for="exampleInput2">Privacy</label>
          <div class="col-md-4">
            <select class="custom-select" id="exampleInput2">
              <option value="1">Public</option>
              <option value="0">Private</option>
            </select>
            <small class="form-text text-muted">Hint messages to be edited.</small>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2" for="exampleInput3">Unique ID</label>
          <div class="col-md-4">
            <input type="email" class="form-control" id="exampleInput3" aria-describedby="emailHelp" placeholder="Enter Unique ID">
            <small class="form-text text-muted">An Attribute internal ID must consist of alphabetic characters (in plain ASCII), numbers, underscores and hyphens (it cannot contain spaces, punctuation, Unicode-only characters, etc).</small>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2" for="exampleInput3">Value Delimiter</label>
          <div class="col-md-4">
            <input style="width: 40px;" type="email" class="form-control" id="exampleInput4" aria-describedby="emailHelp">
            <small class="form-text text-muted">single character or blank.</small>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
</style>
