<template>
<div class="conatiner-fluid slider">
    <div class="list">
        <div class="item active">
            <img src="/public/img1.png">
            <div class="content">
                <p>New Comic</p>
                <h2>Lethal Protector</h2>
                <p>
                    Follow the deadly journey of Venom as he struggles between his dark instincts and his newfound role as a protector. Get ready for a thrilling adventure packed with action, chaos, and unexpected alliances.
                </p>
            </div>
        </div>
        <div class="item">
            <img src="/public/img2.jpg">
            <div class="content">
                <p>Best Seller</p>
                <h2>Venom War</h2>
                <p>
                    A full-blown war erupts when Venom faces his deadliest enemies yet. Chaos reigns as Eddie Brock battles not only his foes, but also the venomous entity inside him. Can he survive the carnage?
                </p>
            </div>
        </div>
        <div class="item">
            <img src="/public/img3.jpg">
            <div class="content">
                <p>Award Winning</p>
                <h2>Spider Society</h2>
                <p>
                    The Spider Society, an ancient group of web-slinging heroes, faces their greatest threat. As the multiverse collapses, only the combined strength of past and present Spider heroes can save it. 
                </p>
            </div>
        </div>
        <div class="item">
            <img src="/public/img4.jpg">
            <div class="content">
                <p>Fan Favorite</p>
                <h2>Deadpool Green</h2>
                <p>
                    Deadpool takes on an eco-friendly mission, but his chaotic methods might do more harm than good. Watch as the Merc with a Mouth tackles environmental villains with his signature mix of humor and violence.
                </p>
            </div>
        </div>
        <div class="item">
            <img src="/public/img5.jpg">
            <div class="content">
                <p>Stan Lee's Pick</p>
                <h2>Black Suit & Blood</h2>
                <p>
                    Spider-Man's iconic black suit returns, but this time with a deadly twist. With darker powers at play, Peter Parker must battle not only his enemies but also the suit’s growing thirst for blood.
                </p>
            </div>
        </div>
    </div>
    <!-- button arrows -->
    <div class="arrows">
        <button class="prev" id="prev"><</button>
        <button class="next" id="next">></button>
    </div>
    <!-- thumbnail -->
    <div class="thumbnail">
        <div class="item active">
            <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/3/00/66e348202b44a/portrait_uncanny.jpg">
            <div class="content">
                Lethal Protectors
            </div>
        </div>
        <div class="item">
            <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/e/10/66e3481097555/portrait_uncanny.jpg">
            <div class="content">
                Venom War
            </div>
        </div>
        <div class="item">
            <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/3/a0/66e34826d552a/portrait_uncanny.jpg">
            <div class="content">
                Spider Society
            </div>
        </div>
        <div class="item">
            <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/3/e0/66e34844e922c/portrait_uncanny.jpg">
            <div class="content">
                Deadpool Green
            </div>
        </div>
        <div class="item">
            <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/3/00/66e348407ba01/portrait_uncanny.jpg">
            <div class="content">
                Black & Blood
            </div>
        </div>
    </div>
</div>

</template>

<script>
import { initSlider } from '/src/app.js';
import { initScroll } from '/src/app.js';
export default {
  name: 'Slider',
  mounted() {
    initSlider();
    initScroll();
  }
};
</script>

<style scoped>
@import '/src/assets/style.css';
</style>