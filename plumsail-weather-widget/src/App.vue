<template>
  <div id="app" class="container">
    <div class="toolbar grid-row">
      <font-awesome-icon v-on:click="editWidget" class="grid-item gear" icon="fa-solid fa-gear"/>
    </div>
    <RouterView v-bind:regions="regions" v-bind:addCustomRegion="addCustomRegion" v-bind:deleteRegion="deleteRegion" :key="regions"/>
  </div>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {RegionObject} from "@/interface/RegionObject";
import axios from "axios";
import router from "@/router";

export default{
  data(){
    return {
      regions: new Array<RegionObject>() || null,
      editMode: true,
      test: "test123",
      lat: 0,
      lon: 0,
      appid: "0046f25cba5aaac4500df334ec0aa5e3"
    }
  },

  mounted() {
    // this.addLocalRegion()
    this.loadRegions()
    this.editWidget()
  },
  methods: {
    addLocalRegion: function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.lat = position.coords.latitude
          this.lon = position.coords.longitude
          const region = new RegionObject()
          region.getAndMapDataByPosition(this.lat,this.lon,this.appid).then(()=>{
            this.regions.push(region)
            region.id = this.regions.length
            this.saveRegions()
          })
        });
      }
    },
    addCustomRegion: function (city: string) {
      const region = new RegionObject()
      region.getAndMapDataByCity(city, this.appid)
          .then(()=>{
            this.regions.push(region)
            region.id = this.regions.length
            this.saveRegions()
          })
    },

    editWidget: function (event) {
      if(this.editMode){
        router.push('/')
      }else {
        router.push('/options')
      }
      this.editMode = !this.editMode;
    },

    saveRegions () {
      const data = JSON.stringify(this.regions)
      localStorage.setItem("regions",data)
    },

    loadRegions () {
      const data = localStorage.getItem("regions")
      this.regions = JSON.parse(data)
      if(this.regions.length == 0) {
        this.addLocalRegion()
      }
    },

    deleteRegion (id:number) {
      this.regions = this.regions.filter((region)=>{
        return region.id != id
      });
      this.saveRegions()
    },
  }
}
</script>

<style>
</style>
