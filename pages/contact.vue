<template>
<no-ssr>
  <section>
    <!-- Contact Us -->
    <contact/>
  </section>
</no-ssr>
</template>

<script>
import Contact from "~/components/Contact.vue";

export default {
  components: {
    Contact
  },
  head() {
    return {
      title: "Contact",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Contact Matt's Car Care for our professional detailing services in Toowoomba."
        }
      ]
    };
  }
};
</script>