<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import footerLink from'@/components/footer.vue'
export default {
  name: 'App',
  components:{
    footerLink
  }
}
</script>
