<template>
  <div>
    <div class="grid-row">
      <H1>Rybinsk, RUS</H1>
    </div>
    <div class="grid-row">
      <H1>21 C</H1>
    </div>
    <div class="grid-row">
      <div class="grid-item" style="flex-basis: 100%">Strong Weather Lorem ipsum 30 dolor sit amet bla bla</div>
    </div>
    <div class="grid-row">
      <div class="grid-item">Parameters: ABC</div>
      <div class="grid-item">{{test}}</div>
      <div class="grid-item">Parameters2: 123</div>
      <div class="grid-item">Parameters3: ZCD</div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    props: ["test"]
  }
</script>

<style>

</style>