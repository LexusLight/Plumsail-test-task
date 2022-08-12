<template :key="regions">
  <div>
    <input class="city-input" ref="input" v-model="name" @keydown.enter="addRegion" placeholder="Add City">
    <draggable
        :list="regions"
        @start="drag=true"
        @end="drag=false"
        @change="saveRegions">
      <template #item="{element}">
        <div class="grid-row cards" >
          <font-awesome-icon class="gear grid-item" icon="fa-solid fa-bars"/>
          <div class="option-name grid-item">{{element.city}}</div>
          <font-awesome-icon class="gear grid-item" icon="fa-solid fa-trash-can" @click="deleteRegion(element.id)"/>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
export default {
  data() {
    return {
      drag: false,
    }
  },
  props: ["regions","addCustomRegion","deleteRegion","saveRegions"],
  components: {
    draggable,
  },
  methods: {
    addRegion: function () {
      this.addCustomRegion(this.name);
      this.$refs.input.value = ''
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
