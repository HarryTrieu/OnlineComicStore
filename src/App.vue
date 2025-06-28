<template>
<div id="app">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse p-2 m-3 bg-dark justify-content-center" id="navbarNav">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/comic" class="nav-link">Comics</router-link>
        <router-link to="/character" class="nav-link">Characters</router-link>
        <router-link to="/new" class="nav-link">News</router-link>
        <router-link to="/contact" class="nav-link">Contact Us</router-link>
        <div class="dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About Us
          </a>
          <ul class="dropdown-menu mt-2" aria-labelledby="aboutDropdown">
            <li>
              <a class="dropdown-item" href="https://www.facebook.com/MarvelAUNZ/?brand_redir=6883542487" target="_blank">
                <ion-icon class="logo2" name="logo-facebook"></ion-icon> Facebook
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="https://www.youtube.com" target="_blank">
                <ion-icon class="logo2" name="logo-youtube"></ion-icon> Youtube
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="https://www.twitter.com" target="_blank">
                <ion-icon class="logo2" name="logo-twitter"></ion-icon> Twitter
              </a>
            </li>
          </ul>
        </div>
        <button class="state btn btn-secondary" @click="toggleDarkMode">
          {{ isDarkMode ? 'Light' : 'Dark' }}
        </button>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</div>

</template>

<script>
import { defineComponent } from 'vue';
import { useThemeStore } from '/src/app.js'; // Import the theme store

export default defineComponent({
  name: 'App',
  setup() {
    const themeStore = useThemeStore(); // Access the theme store

    return {
      isDarkMode: themeStore.isDarkMode, // Access dark mode state
      toggleDarkMode: themeStore.toggleDarkMode, // Access toggle function
    };
  },
});
</script>


<style scoped>
@import '/src/assets/style.css';
.logo2{
  margin-right: 7px;
}
.navbar-toggler {
  margin-top: -25px; 
}
.state{
  margin-left:38px;
  margin-top:10px;
  margin-bottom:10px;
}
</style>


