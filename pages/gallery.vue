<template>
  <no-ssr>
    <section>
      <!-- Gallery -->
      <gallery />
    </section>
  </no-ssr>
</template>

<script>
import Gallery from '~/components/Gallery.vue'

export default {
  components: {
    Gallery
  },
  head() {
    return {
      title: "Gallery",
      meta: [{
        hid: "description",
        name: "description",
        content: "Our best cars, utes, wagons, vans, 4x4's & quad detailing work showcased in our gallery."
      }]
    }
  }
}
</script>