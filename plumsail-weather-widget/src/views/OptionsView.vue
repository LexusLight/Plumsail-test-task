<template xmlns="http://www.w3.org/1999/html">
  <div>
    <input class="city-input" v-model="name" @keydown.enter="addRegion" placeholder="Add City">
    <div v-for="region in regions" class="cards">
      <div class="grid-row">
          <font-awesome-icon class="gear grid-item" icon="fa-solid fa-bars"/>
          <div class="option-name grid-item">{{region.city}}</div>
          <font-awesome-icon class="gear grid-item" icon="fa-solid fa-trash-can" @click="deleteRegion(region.id)"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["regions","addCustomRegion","deleteRegion"],
  methods: {
    addRegion: function () {
      this.addCustomRegion(this.name);
      this.name = ""
    }
  }
}
</script>

<style>
  .city-input {
    height: 30px;
    font-size: 20px;
    width: 100%;
    border: solid;
    background-color: #c9e9ff;
    color: #00487C;
  }
  .option-name{
    font-size: 20px;
  }
</style>
