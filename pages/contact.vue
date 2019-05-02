<template>
  <div>
    <section>
      <div class="uk-section">
        <div class="uk-container uk-flex-center">
          <div class="uk-text-center">
            <h1>
              GET IN TOUCH
            </h1>
            <h3 class="uk-text-uppercase">
              For a professional detailing service in Toowoomba
            </h3>
          </div>
          <!-- Contact Details -->
          <div class="uk-grid-match uk-child-width-1-2@s" uk-grid>
            <!-- Map -->
            <div>
              <div class="uk-card uk-card-default uk-text-center">
                <div class="uk-card-media-top uk-border-rounded">
                  <br>
                  <h2 class="uk-card-title">
                    VISIT US
                  </h2>
                </div>
                <div class="uk-card-media-bottom">
                  <a href="https://goo.gl/maps/EAwXNC1KVjD2" target="_blank" rel="noopener">
                    <img src="~assets/img/map.png" alt="Find us here!" title="Find us here!">
                  </a>
                </div>
              </div>
            </div>
            <!-- Details -->
            <div>
              <div class="uk-card uk-card-default uk-text-center">
                <div class="uk-card-media-top uk-border-rounded">
                  <br>
                  <h2 class="uk-card-title">
                    KEEP IN TOUCH
                  </h2>
                  <ul class="uk-list">
                    <li class="uk-text-lead">
                      BOOK NOW ON <a href="tel:0402256181">0402 256 181</a>
                    </li>
                    <li class="uk-text-lead">
                      GET SOCIAL 
                      <a href="https://facebook.com/mattscarcare" target="_blank" rel="noopener">MATT'S CAR CARE</a>
                    </li>
                    <li>
                      <span class="uk-text-lead">
                        VISIT US
                      </span>
                      <address>
                        13 Stark Ct,
                        Harristown
                        QLD 4350
                      </address>
                    </li>
                    <li class="uk-text-lead">
                      E-MAIL US
                      <a href="javascript:alert('JavaScript')" onClick="this.href=atob('bWFpbHRvOm1hdHRoZXcuZ2VhY2glNDBnbWFpbC5jb20/c3ViamVjdD1Cb29rJTIwbXklMjBjYXIlMjBpbi4mYm9keT1IaSUyME1hdHQlMjdzJTIwQ2FyJTIwQ2FyZSUyQyUyMEklMjdkJTIwbGlrZSUyMHRvJTIwYm9vayUyMG15JTIwLXJlcGxhY2UlMjB0aGlzJTIwdGV4dC0lMjBpbiUyMGZvciUyMGRldGFpbGluZyUyMHNvb24uJTIwV2hhdCUyMGRhdGVzJTIwYXJlJTIwZ29vZCUyMGZvciUyMHlvdSUzRg=='); return true">HERE</a>
                    </li>
                    <br>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: "Contact",
        meta: [{
          hid: "description",
          name: "description",
          content: "Contact Matt's Car Care for our professional detailing services in Toowoomba."
        }]
      }
    }
  }

</script>