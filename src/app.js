// src/assets/slider.js

export function initSlider() {
    let items = document.querySelectorAll('.slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let thumbnails = document.querySelectorAll('.thumbnail .item');

    // config param
    let countItem = items.length;
    let itemActive = 0;

    // event next click
    next.onclick = function() {
        itemActive = (itemActive + 1) % countItem;
        showSlider();
    }

    // event prev click
    prev.onclick = function() {
        itemActive = (itemActive - 1 + countItem) % countItem;
        showSlider();
    }

    // auto run slider
    let refreshInterval = setInterval(() => {
        next.click();
    }, 5000)

    function showSlider() {
        let itemActiveOld = document.querySelector('.slider .list .item.active');
        let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
        itemActiveOld.classList.remove('active');
        thumbnailActiveOld.classList.remove('active');

        // active new item
        items[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');

        // clear auto time run slider
        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => {
            next.click();
        }, 5000);
    }

    // click thumbnail
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            itemActive = index;
            showSlider();
        })
    });
}

//sticky nav
export function initScroll() {
    window.onscroll = function() {
        var navbar = document.querySelector('.navbar');
        if (window.scrollY > 800) {
            navbar.classList.add('sticky-top');
        } else {
            navbar.classList.remove('sticky-top');
        }
    };
}
//dark mode
import { defineStore } from 'pinia';
export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDarkMode: false, // Default state
  }),
  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode; // Toggle the dark mode state
      document.body.classList.toggle('dark', this.isDarkMode); 
    },
  },
});
