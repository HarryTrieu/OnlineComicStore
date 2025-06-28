<template>
<!-- slider -->
<Slider/>
<!--Hot Characters-->
<div id="story" class="container new">
    <h2 class="underline">Most Popular</h2>
</div>
<div class="wrapper2">
    <div class="container">
        <input type="radio" name="slide" id="c1" checked>
        <label for="c1" class="card">
            <div class="row">
                <div class="icon">1</div>
                <div class="description">
                    <h4>An An Lee</h4>
                    <p>A cheerful girl who excosises ghosts</p>
                </div>
            </div>
        </label>
        <input type="radio" name="slide" id="c2" >
        <label for="c2" class="card">
            <div class="row">
                <div class="icon">2</div>
                <div class="description">
                    <h4>Batman</h4>
                    <p>Edgelord,Billionaire,Playboy,keep Gotham safe at night</p>
                </div>
            </div>
        </label>
        <input type="radio" name="slide" id="c3" >
        <label for="c3" class="card">
            <div class="row">
                <div class="icon">3</div>
                <div class="description">
                    <h4>Red Hood</h4>
                    <p>Batman's student so he's another Edgelord</p>
                </div>
            </div>
        </label>
        <input type="radio" name="slide" id="c4" >
        <label for="c4" class="card">
            <div class="row">
                <div class="icon">4</div>
                <div class="description">
                    <h4>venom</h4>
                    <p>A lab experiment that turns out to be a monster</p>
                </div>
            </div>
        </label>
        <input type="radio" name="slide" id="c5" >
        <label for="c5" class="card">
            <div class="row">
                <div class="icon">5</div>
                <div class="description">
                    <h4>Random Guy Slide 5</h4>
                    <p>He's random</p>
                </div>
            </div>
        </label>
    </div>
</div>
<!--Others-->
<div id="story" class="container new">
    <h2 class="mb-4 underline">Characters</h2>
</div>
<div class="container">
    <div class="row justify-content-center">
        <!-- Card 1 -->
        <div class="card col-md-3 mb-3">
            <div class="card_img">
                <img src="/public/Sonetto.jpg" alt="">
            </div>
            <h2>Sonetto</h2>
            <p>The Poet</p>
            <a href="https://www.prydwen.gg/re1999/characters/an-an-lee">
                <button class="contact3">More Details</button>
            </a>
        </div>
        <!-- Card 2 -->
        <div class="card col-md-3 mb-3">
            <div class="card_img">
                <img src="/public/AnAnLee.jpg" alt="">
            </div>
            <h2>An An Lee</h2>
            <p>Ghostbuster</p>
            <a href="https://www.prydwen.gg/re1999/characters/an-an-lee">
                <button class="contact3">More Details</button>
            </a>
        </div>
        <!-- Card 3 -->
        <div class="card col-md-3 mb-3">
            <div class="card_img">
                <img src="/public/Cuc2.jpg" alt="">
            </div>
            <h2>Bkornblume</h2>
            <p>Stasi Spy</p>
            <a href="https://www.prydwen.gg/re1999/characters/an-an-lee">
                <button class="contact3">More Details</button>
            </a>
        </div>
        <!-- Card 4 -->
        <div class="card col-md-3 mb-3">
            <div class="card_img">
                <img src="/public/Rengu2.jpg" alt="">
            </div>
            <h2>Regulus</h2>
            <p>Radio Pirate</p>
            <a href="https://www.prydwen.gg/re1999/characters/an-an-lee">
                <button class="contact3">More Details</button>
            </a>
        </div>

        <!--row2-->
        <div class="card col-md-3 mb-3">
            <div class="card_img">
                <img src="https://cdn.marvel.com/content/1x/191cyc_com_crd_01.png" alt="">
            </div>
            <h2>Cyclops</h2>
            <p>The Leader</p>
            <a href="https://www.prydwen.gg/re1999/characters/an-an-lee">
                <button class="contact3">More Details</button>
            </a>
        </div>

        <div class="card col-md-3 mb-3">
            <div class="card_img">
                <img src="https://cdn.marvel.com/content/1x/356gmb_com_crd_01.png" alt="">
            </div>
            <h2>Gambit</h2>
            <p>The Charming Man</p>
            <a href="https://www.prydwen.gg/re1999/characters/an-an-lee">
                <button class="contact3">More Details</button>
            </a>
        </div>

        <div class="card col-md-3 mb-3">
            <div class="card_img">
                <img src="https://cdn.marvel.com/content/1x/1325akm_com_crd_01.png" alt="">
            </div>
            <h2>97</h2>
            <p>Ice Queen</p>
            <a href="https://www.prydwen.gg/re1999/characters/an-an-lee">
                <button class="contact3">More Details</button>
            </a>
        </div>

        <div class="card col-md-3 mb-3">
            <div class="card_img">
                <img src="https://cdn.marvel.com/content/1x/058mgn_com_crd_02.png" alt="">
            </div>
            <h2>Magneto</h2>
            <p>The Broken</p>
            <a href="https://www.prydwen.gg/re1999/characters/an-an-lee">
                <button class="contact3">More Details</button>
            </a>
        </div>

        


    </div>
</div>
</template>

<script>
import Slider from './slider.vue';
import { initSlider } from '/src/app.js';
import { initScroll } from '/src/app.js';
export default {
  name: 'Character',
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
@import '/src/assets/character.css';
</style>
