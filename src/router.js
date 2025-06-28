import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/index.vue'
import CharacterPage from './components/character.vue'
import ComicPage from './components/comic.vue'
import ContactPage from './components/contact.vue'
import NewPage from './components/new.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/character',
    name: 'Character',
    component: CharacterPage
  },
  {
    path: '/comic',
    name: 'Comic',
    component: ComicPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  },
  {
    path: '/new',
    name: 'New',
    component: NewPage
  }
]

const router = createRouter({
  history: createWebHistory('/OnlineComicStore'),
  routes
})

export default router