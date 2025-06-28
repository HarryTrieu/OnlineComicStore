<template>
<!-- slider -->
<Slider/>
<!--Hot-->
<div id="story" class="container my-5">
    <h2 class="mb-5 underline">Hottest News</h2>
    <a href="">
        <div class="row mb-4 bg-light rounded p-4">
            <div class="col-sm-4 col-12">
                <img src="https://cdn.marvel.com/content/1x/dogpool1_0.jpg" class="img-fluid rounded" alt="">
            </div>
            <div class="col-sm-8 col-12">
                <p class="lead mb-3"><strong>Uggliest Brittian's Dog becomes Deadpool Dog</strong></p>
                <p class="small">In a remarkable twist of fate and fandom, the beloved character from the British television series "Ugliest Britons," known simply as the Dog, has undergone a spectacular transformation. Once celebrated for its unique and endearing appearance on the show, this canine star has now embraced a new identity as "Deadpool Dog."</p>
            </div>
        </div>
    </a>

    <a href="">
        <div class="row mb-4 bg-light rounded p-4">
            <div class="col-sm-4 col-12">
                <img src="https://cdn.marvel.com/content/1x/logans_future_old_man_logan_2016_50_art_by_andrea_sorrentino_and_giada_marchisio.jpg" class="img-fluid rounded" alt="">
            </div>
            <div class="col-sm-8 col-12">
                <p class="lead title2 mb-3"><strong>Old Man Logan Future</strong></p>
                <p class="small">The dystopian future of Old Man Logan’s world reflects contemporary issues and themes. Future stories could continue to use his character as a lens to explore political and social commentary, providing a gritty perspective on issues such as power, corruption, and justice.

                    Old Man Logan's future is as unpredictable and multifaceted as the character himself. Whether he’s battling remnants of his dystopian world, crossing paths with other Marvel heroes, or seeking redemption, his story will continue to captivate fans and expand the rich tapestry of the Marvel Universe.</p>
            </div>
        </div>
    </a>
    
    <a href="">
        <div class="row mb-4 bg-light rounded p-4">
            <div class="col-sm-4 col-12">
                <img src="https://cdn.marvel.com/content/1x/mmah_wwp-1920x1080.jpg" class="img-fluid rounded" alt="">
            </div>
            <div class="col-sm-8 col-12">
                <p class="lead title3 mb-3"><strong>Marvel and Wounded Warrior Project Team Up with 'Marvel Make Me A Hero'</strong></p>
                <p class="small">Partnering with Wounded Warrior Project, which exists to serve and empower wounded warriors and their families, Marvel Make Me A Hero will be spotlighting amazing veterans and caretakers who are making a positive impact in their communities. In addition, a Marvel artist will honor these real-life heroes by transforming them into a Super Hero of their own with an original piece of art.</p>
            </div>
        </div>
    </a>
</div>
<!--Normal-->
<div id="story" class="container my-5">
    <h2 class="underline news">News</h2>
</div>
<div class="card-container">

    <div class="card">
        <a href="">
            <img src="https://cdn.marvel.com/content/1x/secret_empire_deadpool_2014_27_art_by_david_lopez.jpg" alt="Deadpool and Captain America">
            <h2>Deadpool & Captain America's Relationship, Explained</h2>
        </a>
    </div>

    <div class="card">
        <a href="">
        <img src="https://cdn.marvel.com/content/1x/uncanny_x-men_1.jpg" alt="Hand holding a playing card">
        <h2>August 7's New Marvel Comics: The Full List</h2>
        </a>
    </div>

    <div class="card">
        <a href="">
        <img src="https://cdn.marvel.com/content/1x/im2024001_cover.jpg" alt="Iron Man">
        <h2>Iron Man looking angry and edgy</h2>
        </a>
    </div>

    <div class="card">
        <a href="">
            <img src="https://cdn.marvel.com/content/1x/mknightfistk2024001_platt_0.jpg" alt="Moon Knight">
            <h2>Moon Knight is resureccted, who would have guessed</h2>
        </a>
    </div>

    <div class="card">
        <a href="">
            <img src="https://cdn.marvel.com/content/1x/secret_empire_deadpool_2014_27_art_by_david_lopez.jpg" alt="Deadpool and Captain America">
            <h2>Deadpool & Captain America's Relationship, Explained</h2>
        </a>
    </div>

        <div class="card">
        <img src="https://cdn.marvel.com/content/1x/uncanny_x-men_1.jpg" alt="Hand holding a playing card">
        <h2>August 7's New Marvel Comics: The Full List</h2>
        </div>

        <div class="card">
        <a href="">
            <img src="https://cdn.marvel.com/content/1x/im2024001_cover.jpg" alt="Iron Man">
            <h2>Iron Man looking angry and edgy</h2>
        </a>
        </div>

        <div class="card">
            <a href="">
            <img src="https://cdn.marvel.com/content/1x/mknightfistk2024001_platt_0.jpg" alt="Moon Knight">
            <h2>Moon Knight is resureccted, who would have guessed</h2>
            </a>
        </div>
</div>
</template>

<script>
import Slider from "./slider.vue";
import { initSlider } from '/src/app.js';
import { initScroll } from '/src/app.js';
export default {
  name: 'New',
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
@import '/src/assets/new.css';
</style>