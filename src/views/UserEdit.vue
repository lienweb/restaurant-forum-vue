<template>
  <div class="container py-5">
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input id="name" type="text" name="name" class="form-control" placeholder="Enter Name" required>
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <input id="image" type="file" name="image" accept="image/*" class="form-control-file">
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>
