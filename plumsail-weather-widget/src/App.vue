<template>
  <div id="app" class="container">
    <div class="toolbar grid-row">
      <font-awesome-icon v-on:click="editWidget" class="grid-item gear" icon="fa-solid fa-gear"/>
    </div>
    <RouterView v-bind:regions="regions" v-bind:addCustomRegion="addCustomRegion" v-bind:deleteRegion="deleteRegion" v-bind:saveRegions="saveRegions"/>
  </div>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {RegionObject} from "@/interface/RegionObject";
import axios from "axios";
import router from "@/router";
import { defineComponent } from 'vue'

export default defineComponent({
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
    this.loadRegions()
    this.editWidget()
  },
  methods: {
    addLocalRegion: function (): void {
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
    addCustomRegion: function (city: string): void {
      const region = new RegionObject()
      region.getAndMapDataByCity(city, this.appid)
          .then(()=>{
            this.regions.push(region)
            region.id = this.regions.length
            this.saveRegions()
          })
    },
    editWidget: function (): void {
      if(this.editMode){
        router.push('/')
      }else {
        router.push('/options')
      }
      this.editMode = !this.editMode;
    },
    saveRegions: function (): void { //Сохраняем названия регионов
      let data:any
       data = this.regions.map((item) => {
        return item.city
      })
      data = [...new Set(data)]
      data = JSON.stringify(data)
      localStorage.setItem("regions",data)
    },
    loadRegions: function (): void { //Загружаем регионы и обновляем их
      const data:any = localStorage.getItem("regions")
      const loadedRegions = JSON.parse(data)
      if(loadedRegions==null || loadedRegions.length == 0 ) {
        this.addLocalRegion()
      }else {
        loadedRegions.forEach((item:string)=>{
          this.addCustomRegion(item)
        })
      }
    },
    deleteRegion: function (id:number): void { //Удаляем регион
      this.regions = this.regions.filter((region)=>{
        return region.id != id
      });
      this.saveRegions()
    },
  }
})
</script>

<style>
</style>
