<template>
  <div>
    <navbar></navbar>
    <nuxt/>
    <nuxt-footer/>
  </div>
</template>

<script>
  import Navbar from "~/components/Navbar.vue"
  import NuxtFooter from "~/components/Footer.vue"

  export default {
    components: {
      Navbar,
      NuxtFooter
    }
  }
</script>

<style>
html
{
  font-family: "Roboto", sans-serif;
  font-size: 16px!important;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}

.uk-h1, .uk-h2, .uk-h3, .uk-h4, .uk-h5, .uk-h6, h1, h2, h3, h4, h5, h6 {
    margin: 0 0 20px 0;
    font-family: 'Archivo Black', sans-serif;
    font-weight: 400;
    color: #202023!important;
}

.uk-link, a {
  color: #F06850;
}

.uk-link:hover, a:hover {
  color: #202023;
  text-decoration: none;
}

.uk-link-heading a:not(:hover), a.uk-link-heading:not(:hover) {
  color: #F06850;
}

.uk-link-heading a:hover, a.uk-link-heading:hover {
  color: #202023;
  text-decoration: none;
}

.uk-navbar-item, .uk-navbar-nav>li>a, .uk-navbar-toggle {
  font-family: 'Archivo Black', sans-serif;
  font-weight: 400;
}
</style>
