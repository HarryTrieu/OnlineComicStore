<template>
<!-- slider -->
<Slider/>
<!--Cards-->
<div id="story" class="mt-5 container">
    <h2 class="underline">Comics</h2>
</div>
<div class="container">
    <div class="container">
        <div class="row">
            <div class="col mb-3">
                <div class="card" style="width: 18rem;">
                <!--<a href="" class="card">-->
                <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/3/a0/66212b6b44f79/portrait_uncanny.jpg" class="card-img-top" alt="">
                <div class="card-body">
                    <p class="starring">Deadpool,Ryan,...</p>
                    <h5 class="card-title"><a href="" class="card-title-link"> X - Force (2024) #1</a></h5>
                    <p class="card-text">Deadpool and his friends</p>
                    <a href="#" class="btn btn-primary">More about X - force</a>
                </div>
                </div>
            </div>
    
            <div class="col mb-3">
            <div class="card" style="width: 18rem;">
                <!--<a href="" class="card">-->
                <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/9/00/66212bd935aae/portrait_uncanny.jpg" class="card-img-top" alt="">
                <div class="card-body">
                <p class="starring">Mr Fantastic,Ben,Spider-Man,...</p>
                <h5 class="card-title"><a href="" class="card-title-link"> Fantastic Four (2022)</a></h5>
                <p class="card-text">Totally not plastic man</p>
                <a href="#" class="btn btn-primary">More about Fantastic Four</a>
                </div>
            </div>
            </div>
    
        <div class="col mb-3">
            <div class="card" style="width: 18rem;">
            <!--<a href="" class="card">-->
            <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/f/c0/66acfcd18d6f5/portrait_uncanny.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <p class="starring">Peter Parker,Doctor Oc,Lilya,...</p>
                <h5 class="card-title"><a href="" class="card-title-link"> Spider-Man Black Suit</a></h5>
                <p class="card-text">Edgy Spider-Man</p>
                <a href="#" class="btn btn-primary">More about Spider-Man </a>
            </div>
            </div>
        </div>

        <div class="col mb-3">
            <div class="card" style="width: 18rem;">
            <!--<a href="" class="card">-->
            <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/c/40/66acfcb1a8158/portrait_uncanny.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <p class="starring">Regulus,Black Panther,Thor,...</p>
                <h5 class="card-title"><a href="" class="card-title-link"> Ultimate Black Panther</a></h5>
                <p class="card-text">Black Panther has power ups</p>
                <a href="#" class="btn btn-primary">More about Black Panther</a>
            </div>
            </div>
        </div>


          <div class="col mb-3">
          <div class="card" style="width: 18rem;">
              <!--<a href="" class="card">-->
              <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/6/e0/66a7f5e3c6805/portrait_uncanny.jpg" class="card-img-top" alt="">
              <div class="card-body">
              <p class="starring">Jack,Jill,Hillary Clinton</p>
              <h5 class="card-title"><a href="" class="card-title-link"> Union Jack The Reaper</a></h5>
              <p class="card-text">He's back at it again! </p>
              <a href="#" class="btn btn-primary">More about Union Jack</a>
              </div>
          </div>
          </div>

      <div class="col mb-3">
          <div class="card" style="width: 18rem;">
          <!--<a href="" class="card">-->
          <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/c/60/66fc08abc51d8/portrait_uncanny.jpg" class="card-img-top" alt="">
          <div class="card-body">
              <p class="starring">Deadpool,Ryan Reynolds</p>
              <h5 class="card-title"><a href="" class="card-title-link"> DareDevil (2022)</a></h5>
              <p class="card-text">Dare Devil is giving up?</p>
              <a href="#" class="btn btn-primary">More about DareDevil</a>
          </div>
          </div>
      </div>

      <div class="col mb-3">
      <div class="card" style="width: 18rem;">
          <!--<a href="" class="card">-->
          <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/a/30/5c9cf9f5218e4/portrait_uncanny.jpg" class="card-img-top" alt="">
          <div class="card-body">
          <p class="starring">Deadpool,Ryan Reynolds</p>
          <h5 class="card-title"><a href="" class="card-title-link"> Paradise X (2023)</a></h5>
          <p class="card-text">The Paradise of Marvel</p>
          <a href="#" class="btn btn-primary">More about Paradise X </a>
          </div>
      </div>
      </div>

      <div class="col mb-3">
      <div class="card" style="width: 18rem;">
          <!--<a href="" class="card">-->
          <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/9/80/66fc08b7b1d82/portrait_uncanny.jpg" class="card-img-top" alt="">
          <div class="card-body">
          <p class="starring">Deadpool,Ryan Reynolds</p>
          <h5 class="card-title"><a href="" class="card-title-link">Get FURY (2024)</a></h5>
          <p class="card-text">The backstory of Cap. Fury</p>
          <a href="#" class="btn btn-primary">More about Get FURY</a>
          </div>
      </div>
      </div>


      </div>
      </div>
</div>
</template>

<script>
import Slider from './slider.vue';
import { initSlider } from '/src/app.js';
import { initScroll } from '/src/app.js';
export default {
  name: 'Comic',
   components: {
    Slider  
  },
  mounted() {
    initSlider();
    initScroll();
  }
};
</script>

<style scoped>
@import '/src/assets/style.css';
</style>
