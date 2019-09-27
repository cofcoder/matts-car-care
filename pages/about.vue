<template>
  <div class="uk-section">
    <div class="uk-container uk-flex-container">
      <div class="uk-text-center">
        <h1>ABOUT US</h1>
        <section>
          <p>Matt’s Car Care is a professional detailing service in Toowoomba, it’s our passion and we thrive on ensuring your vehicle gets the best detail around. We have grown significantly over the last few years, going from strength to strength.</p>
          <p>Our detailing services cover most vehicles from cars to Utes, 4x4’s to semi-trucks. We find that by hand washing and hand cleaning, it gives the best detailing results which most automated detailers cannot achieve.</p>
          <p>We take pride in the work we provide for your pride and joy, get in touch with us to find out how we get your pride and joy to showroom quality.</p>
        </section>
        <booking/>
      </div>
    </div>
    <clients />
  </div>
</template>

<script>
import Clients from "~/components/Clients.vue";
import Booking from "~/components/Booking.vue";

export default {
  components: {
    Clients,
    Booking
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