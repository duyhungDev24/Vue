<template>
  <div class="container mx-auto px-40">
    <HeaderClient />
    <RouterView />
  </div>
  <FooterClient />
</template>

<script>
import HeaderClient from '../../Header+Footer/HeaderClient.vue'
import FooterClient from '../../Header+Footer/FooterClient.vue'

export default {
  components: {
    HeaderClient,
    FooterClient
  }
}
</script>

<style scoped>

</style>
