<template>
  <no-ssr>
    <div class="uk-section uk-section-small uk-section-muted">
      <div class="uk-container uk-text-center">
        <h2>OUR WORK</h2>
        <div class="uk-child-width-1-3@s" uk-grid>
          <div>
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top uk-border-rounded">
                <img src="~/assets/img/ute-matts.jpg" class="uk-border-rounded" alt="">
              </div>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top uk-border-rounded">
                <img src="~/assets/img/toyota-matts.jpg" class="uk-border-rounded" alt="">
              </div>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top uk-border-rounded">
                <img src="~/assets/img/mustang-matts.jpg" class="uk-border-rounded" alt="">
              </div>
            </div>
          </div>
        </div>
        <br>
        <nuxt-link to="/gallery" class="uk-button uk-button-primary uk-button-large uk-border-rounded">VIEW
          MORE</nuxt-link>
      </div>
    </div>
  </no-ssr>
</template>

<style>
</style>