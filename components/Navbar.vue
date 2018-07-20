<template>
  <header>
    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
      <nav class="uk-navbar-container uk-margin" uk-navbar>
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
              <nuxt-link to="/" exact>Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about" exact>About</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/services" exact>Services</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/gallery" exact>Gallery</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact" exact>Contact</nuxt-link>
            </li>
          </ul>
          <a class="uk-navbar-toggle uk-hidden@m" type="button">
            <span uk-navbar-toggle-icon></span>
            <span class="uk-margin-small-left">Menu</span>
          </a>
          <div uk-dropdown="mode: click">
            <ul class="uk-nav uk-dropdown-nav">
              <li>
                <nuxt-link to="/" exact>Home</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/about" exact>About</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/services" exact>Services</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/gallery" exact>Gallery</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact" exact>Contact</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
ul.uk-navbar-nav > li > a.nuxt-link-exact-active.nuxt-link-active {
  border-bottom: 2px solid #f06850;
  color: #f06850;
}

a.nuxt-link-exact-active.nuxt-link-active {
    border-bottom: 2px solid #f06850;
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
