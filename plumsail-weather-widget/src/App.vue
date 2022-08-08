<template>
  <div id="app" class="container">
    <div class="grid-row">
      <h2 class="grid-item" style="flex-basis: 80%">WEATHER WIDGET</h2>
      <font-awesome-icon v-on:click="editWidget" class="grid-item gear" icon="fa-solid fa-gear"/>
    </div>
    <RouterView v-bind:test="test"/>
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
      editMode: false,
      test: "test123",
      lat: 0,
      lon: 0,
      appid: "0046f25cba5aaac4500df334ec0aa5e3"
    }
  },
  mounted() {
    this.setLocalCoords()
  },
  methods: {
    setLocalCoords: function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.lat = position.coords.latitude
          this.lon = position.coords.longitude
          axios .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lon}&exclude=daily&units=metric&appid=${this.appid}`)
              .then(weather => {

                axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${this.lat}&lon=${this.lon}&appid=${this.appid}`)
                  .then((city => {
                    let region = new RegionObject()
                    region.city = city.data[0].name
                    region.temperature = weather.data.current.temp
                    region.weather = weather.data.current.weather[0].main
                    region.about_weather = weather.data.current.weather[0].description
                    region.visibility = weather.data.current.visibility
                    region.humidity = weather.data.current.humidity
                    region.dew_point = weather.data.current.dew_point
                    region.wind_speed = weather.data.current.wind_speed
                    region.pressure = weather.data.current.pressure
                    console.log(region)
                    this.regions.push(region)
                  }))


              });
        });
      }
    },

    editWidget: function (event) {
      if(this.editMode){
        router.push('/')
      }else {
        router.push('/options')
      }
      this.editMode = !this.editMode;
    }
    // updateRegions () {
    //   this.regions = this.regions.map((element:IRegionObject) => {
    //     //Обновляем
    //   })
    // },

    // saveRegions () {
    //   const data = JSON.stringify(this.regions)
    //   localStorage.setItem("regions",data)
    // },
    //
    // loadRegions () {
    //   const data = localStorage.getItem("regions")
    //   this.regions = JSON.parse(this.regions)
    //   if(!this.regions) {
    //     this.createFirstRegion()
    //   }
    // },
    //
    // createFirstRegion(){
    // },
    //
    // createNewRegion(data:IRegionObject){
    //   const region = new RegionObject(data)
    // },
    //
    // getRegionRequest(){
    //   const data = fetch()//....
    //   this.createNewRegion(data)
    // },
    //
    // deleteRegion (id:number) {
    //   this.regions = this.regions.map((element:IRegionObject) => {
    //     //Обновляем
    //   })
    // },
  }
}
</script>

<style>
</style>
