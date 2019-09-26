<template>
  <div>
    <div class="uk-section uk-section-default">
      <div class="uk-container">
        <h1>Section Default</h1>

        <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>

      </div>
    </div>
    <clients />
  </div>
</template>

<script>
import Clients from "~/components/Clients.vue";

export default {
  components: {
    Clients
  },
  head() {
    return {
      title: "About",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Matt's Car Care in Toowoomba. Our professional detailing uses high quality detailing products for your automotives."
        }
      ]
    };
  }
};
</script>