<template :key="regions">
  <div v-if="regions.length>0">
    <div v-for="(region,index) in regions" class="cards">
      <div>
        <div class="grid-row">
          <h3>
            <font-awesome-icon class="icon" icon="fa-solid fa-house"/>
            {{region.city}}
          </h3>
        </div>
        <div class="grid-row">
          <div >
            <font-awesome-icon class="icon" icon="fa-solid fa-temperature-high"/>
            {{region.temperature}}
          </div>
        </div>
        <div class="grid-row">
          <div class="grid-item" style="flex-basis: 100%">
            <font-awesome-icon class="icon" icon="fa-solid fa-cloud-sun"/>
            {{region.weather}}
          </div>
          <div class="grid-item" style="flex-basis: 100%">
            <font-awesome-icon class="icon" icon="fa-solid fa-comment-dots" />
            {{region.about_weather}}
          </div>
        </div>
        <div class="grid-row">
          <div class="grid-item">
            <font-awesome-icon class="icon" icon="fa-solid fa-eye" /> Visibility:
            {{region.visibility}}km.
          </div>
          <div class="grid-item">
            <font-awesome-icon class="icon" icon="fa-solid fa-droplet" /> Humidity:
            {{region.humidity}}%
          </div>
          <div class="grid-item">
            <font-awesome-icon class="icon" icon="fa-solid fa-wind" />Wind:
            {{region.wind_speed}}m\s
          </div>
          <div class="grid-item">
            <font-awesome-icon class="icon" icon="fa-solid fa-arrows-to-circle" /> Pressure:
            {{region.pressure}}hPa
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
  export default {
    props: ["regions"],
  }
</script>

<style>

</style>