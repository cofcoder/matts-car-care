<template>
  <div class="uk-section">
    <div class="uk-container uk-flex-container">
      <div class="uk-text-center">
        <h1>CONTACT US</h1>
        <!-- Contact Information -->
        <div class="uk-child-width-1-2@s" uk-grid>
        <!-- Map -->
        <div id="map">
          <div class="uk-card uk-card-default uk-border-rounded">
            <div class="uk-card-media-top">
            <a href="https://www.google.co.uk/maps/dir//10+Gordon+St,+North+Toowoomba+QLD+4350,+Australia/@-27.547889,151.9521763,17z/data=!4m17!1m7!3m6!1s0x6b965c488e3d664b:0xa7fb9748fa8b14c3!2s10+Gordon+St,+North+Toowoomba+QLD+4350,+Australia!3b1!8m2!3d-27.547889!4d151.954365!4m8!1m0!1m5!1m1!1s0x6b965c488e3d664b:0xa7fb9748fa8b14c3!2m2!1d151.954365!2d-27.547889!3e1?hl=en-GB&authuser=0" target="_blank">
              <img src="~assets/img/map.jpg" class="uk-border-rounded" alt="">
            </a>
            </div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">OUR LOCATION</h3>
              <ul class="uk-list uk-list-divider" id="listDefault-data">
                <li v-for="item in items" :key="item.id">
                  {{ item.message }}
                </li>
              </ul>
              <nuxt-link to="contact" class="uk-button uk-button-primary uk-button-large uk-border-rounded" v-for="button in buttons" :key="button.id">
                {{ button.message }}</nuxt-link>
            </div>
          </div>
        </div>
        <!-- Contact Detials -->
        <div id="contact-details">
          <div class="uk-card uk-card-default uk-border-rounded">
            <div class="uk-card-media-top">
              <img src="https://media.giphy.com/media/3s4iexviAK50wUd2fX/giphy.gif" class="uk-border-rounded" alt="">
            </div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">GET IN TOUCH</h3>
              <ul class="uk-list uk-list-divider">
                <li v-for="item in items" :key="item.id">
                  {{ item.message }}
                </li>
              </ul>
              <nuxt-link to="contact" class="uk-button uk-button-primary uk-button-large uk-border-rounded" v-for="button in buttons" :key="button.id">
                {{ button.message }}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>