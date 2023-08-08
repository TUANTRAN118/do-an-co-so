<template>
    <compheader />
    <a id="map" href="javascript:;" data-toggle="modal" data-target="#XemBanDo" onclick="getMaps(11.9404192, 108.4583132, 'Đà Lạt')">
        <i class="fa fa-map-marker"></i> Xem Bản Đồ
    </a>
    <compfooter />
  
  </template>
  
  
  
  
  <script>
  import compheader from '../components/compheader.vue';
  import compfooter from '../components/compfooter.vue';

  export default {
    components: {
      compheader,
      compfooter,
     
    }
  
  }
  
  </script>
  
  
  
  
  <style></style>
  