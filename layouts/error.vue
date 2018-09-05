<template>
  <div class="uk-container uk-text-center">
    <div v-if="error.statusCode === 404">
      <h1>OHH POLISH! IT SEEMS LIKE SOMETHING IS MISSING.</h1>
      <img src="" alt="">
    </div>
    <div v-else>
      <h1>AN ERROR JUST HAPPENED, CONTACT OUR WEB DEVELOPER DOWN BELOW TO GET IT FIXED!</h1>
    </div>
    <p class="uk-text-large">You could try again by visiting the <nuxt-link to="/">HOME PAGE</nuxt-link></p>
    <br>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>

</style>
