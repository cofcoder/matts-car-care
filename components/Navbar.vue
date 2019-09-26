<template>
  <header>
    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
      <nav class="uk-navbar-container uk-margin-remove-bottom" uk-navbar>
        <!-- Navbar Logo -->
        <div class="uk-navbar-left">
          <a class="uk-navbar-item uk-logo" href="/">
            <img src="~/assets/img/matts-car-care.svg" alt="Matt's Car Care">
          </a>
        </div>
        <!-- Navbar Right Menu -->
        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav uk-visible@m">
            <li>
              <nuxt-link :to="{name: 'index'}" exact>Home</nuxt-link>
            </li>
            <!-- Navbar List Items -->
            <li v-for="item in items" :key="item.id">
              <nuxt-link :to="item.message" exact>{{ item.message }}</nuxt-link>
            </li>
          </ul>
          <a class="uk-navbar-toggle uk-hidden@m" href="#navFull" uk-toggle="target: #offcanvas-nav-primary">
            <span uk-navbar-toggle-icon></span> <span class="uk-margin-small-left">Menu</span>
          </a>
        </div>
        <!-- Offcanvas For Mobile Devices -->
        <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true; flip: true">
          <div class="uk-offcanvas-bar uk-flex uk-flex-column">

            <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
              <button class="uk-offcanvas-close uk-close-large" type="button" uk-close></button>
              <li>
                <nuxt-link :to="{name: 'index'}" exact>Home</nuxt-link>
              </li>
              <!-- Navbar List Items -->
              <li v-for="item in items" :key="item.id">
                <nuxt-link :to="item.message" exact>{{ item.message }}</nuxt-link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    data: function () {
      return {
        // Navbar list items
        items: [{
            message: 'about'
          },
          {
            message: 'services'
          },
          {
            message: 'gallery'
          },
          {
            message: 'contact'
          }
        ]
      }
    }
  }

</script>

<style scoped>
  .uk-navbar-container {
    opacity: 0.97;
  }

  ul.uk-navbar-nav>li>a.nuxt-link-exact-active.nuxt-link-active {
    color: #f06850;
  }

  a.nuxt-link-exact-active.nuxt-link-active {
    color: #f06850;
  }

  .uk-offcanvas-bar .uk-nav-primary>li>a.nuxt-link-exact-active.nuxt-link-active {
    color: #f06850;
  }

  .uk-offcanvas-bar .uk-nav-primary>li>a:hover {
    color: #fff;
  }

  a.uk-link-heading {
    text-transform: uppercase;
    color: #ecc8c2 !important;
  }

  a.uk-link-heading:active {
    text-transform: uppercase;
    color: #ebebeb !important;
  }

</style>
