<template>
<no-ssr>
  <section>
    <services/>
  </section>
</no-ssr>
</template>

<script>
import Services from "~/components/Services.vue";

export default {
  components: {
    Services
  },
  head() {
    return {
      title: "Services",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "We offer wash wax & groom, professional detailing, degreasing engine bays & ute trays, floor mat detailing & more."
        }
      ]
    };
  }
};
</script>