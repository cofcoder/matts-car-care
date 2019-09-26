<template>
<section>
  <div class="uk-container uk-flex-center">
    <div class="uk-text-center">
      <h1>SERVICES</h1>
      <!-- Price List -->
      <div class="uk-child-width-1-2@s" uk-grid>
        <!-- Wash Wax Groom -->
        <div>
          <div class="uk-card uk-card-default uk-border-rounded">
            <div class="uk-card-media-top">
              <img src="~assets/img/ute-matts.jpg" class="uk-border-rounded" alt="">
            </div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">WASH WAX &AMP; GROOM</h3>
              <ul class="uk-list uk-list-divider" id="listDefault-data">
                <li v-for="item in items" :key="item.id">
                  {{ item.message }}
                </li>
                <p class="uk-text-lead">&#36;45 - &#36;70</p>
              </ul>
              <nuxt-link to="contact" class="uk-button uk-button-primary uk-button-large uk-border-rounded">BOOK
                NOW</nuxt-link>
            </div>
          </div>
        </div>
        <!-- Wash Wax Groom Dressing -->
        <div>
          <div class="uk-card uk-card-default uk-border-rounded">
            <div class="uk-card-media-top">
              <img src="~assets/img/toyota-matts.jpg" class="uk-border-rounded" alt="">
            </div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">WASH WAX GROOM &plus; DRESSED</h3>
              <ul class="uk-list uk-list-divider">
<li v-for="item in items" :key="item.id">
                  {{ item.message }}
                </li>
                <li>Deodorised</li>
              </ul>
              <p class="uk-text-lead">&#36;80 - &#36;120</p>
              <nuxt-link to="contact" class="uk-button uk-button-primary uk-button-large uk-border-rounded">BOOK
                NOW</nuxt-link>
            </div>
          </div>
        </div>
        <!-- Hand Polished Wash Wax Groom -->
        <div>
          <div class="uk-card uk-card-default uk-border-rounded">
            <div class="uk-card-media-top">
              <img src="~assets/img/mustang-matts.jpg" class="uk-border-rounded" alt="">
            </div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">WASH WAX GROOM &plus; HAND POLISHED</h3>
              <ul class="uk-list uk-list-divider">
<li v-for="item in items" :key="item.id">
                  {{ item.message }}
                </li>
                <li>Deodorised</li>
                <li>Hand polished</li>
              </ul>
              <p class="uk-text-lead">&#36;140 - &#36;185</p>
              <nuxt-link to="contact" class="uk-button uk-button-primary uk-button-large uk-border-rounded">BOOK
                NOW</nuxt-link>
            </div>
          </div>
        </div>
        <!-- Professional Detailing -->
        <div>
          <div class="uk-card uk-card-default uk-border-rounded">
            <div class="uk-card-media-top">
              <img src="~assets/img/nova-matts.jpg" class="uk-border-rounded" alt="">
            </div>
            <div class="uk-card-body">
              <!-- <span class="uk-card-badge uk-label"> MOST POPULAR </span> -->
              <h3 class="uk-card-title">PROFESSIONAL DETAILING</h3>
              <ul class="uk-list uk-list-divider">
                <li v-for="item in items" :key="item.id">
                  {{ item.message }}
                </li>
                <li>Floors &amp; seats detailed</li>
                <li>Leather cleaned &amp; dressed</li>
                <li>Vinyl surfaces cleaned &amp;dressed</li>
                <li>Windows inside &amp; outside cleaned</li>
                <li>Mirros cleaned</li>
                <li>Interior roof lining chamois wiped</li>
                <li>Boot well &amp; spare tyre cleaned &amp; dressed</li>
                <li>Deodorised</li>
              </ul>
              <p class="uk-text-lead">&#36;200 - &#36;270</p>
              <nuxt-link to="contact" class="uk-button uk-button-primary uk-button-large uk-border-rounded">BOOK
                NOW</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br>
</section>

</template>

<script>
export default {
  data: function () {
    return {
      items: [
        { message: 'Exterior wash'},
        { message: 'Chamois dry'},
        { message: 'Inside/outside windows cleaned'},
        { message: 'Tyres & wheels cleaned & dressed'},
        { message: 'Door jams wiped out'},
        { message: 'Vinyl surfaces wiped & cleaned'},
        { message: 'Interior vacuumed'}
    ]
    }
  }
}
</script>