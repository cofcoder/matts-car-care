<template>
<div>
  <div class="uk-section-default uk-section-hero">
    <div class="uk-section uk-light">
      <div class="uk-container uk-flex-center">
        <div class="uk-text-center uk-position-center">
          <h1 class="uk-heading-alt">AUTOMOTIVE DETAILING IN TOOWOOMBA</h1>
          <h2 class="uk-heading-alt">YOUR PRIDE &amp; JOY IS IN THE RIGHT HANDS</h2>
        </div>
        <div class="uk-position-small uk-position-bottom-center">
          <div class="mousey">
            <div class="scroller">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <clients/>
  <detailing/>
  <mini/>
  <booking/>
</div>
</template>

<script>
import Clients from "~/components/Clients.vue";
import Detailing from "~/components/Detailing.vue";
import Booking from "~/components/Booking.vue";
import Mini from "~/components/Mini.vue";

export default {
  components: {
    Clients,
    Detailing,
    Booking,
    Mini
  },
  head() {
    return {
      title: "Home",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Matt's Car Care offers professional detailing for cars, utes, wagons, vans, 4x4's & quads for a high standard show room finish in Toowoomba."
        }
      ]
    };
  }
};
</script>

<style>
.uk-section-hero {
  background: #ecc8c2;
  opacity: 0.9;
  background-size: cover;
  background-image: url("~/assets/img/mainBG-min.jpg");
  height: 95vh;
  width: 100%;
  margin-top: -20px;
}
.uk-heading-alt {
  color: #ecc8c2 !important;
}

.mousey {
  width: 3px;
  padding: 10px 15px;
  height: 35px;
  border: 2px solid #fff;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
  margin-bottom: 10px;
}
.scroller {
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: #ecc8c2;
  animation-name: scroll;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
  animation-iteration-count: infinite;
}
@keyframes scroll {
  0% {
    opacity: 0;
  }
  10% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(15px);
    opacity: 0;
  }
}
</style>
