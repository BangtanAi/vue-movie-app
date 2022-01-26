import {createRouter, createWebHistory} from 'vue-router'
import DetailMovie from '../components/DetailMovie'
import Movie from '../components/MainMovie'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/movie', component: Movie},
        {path: '/detail/:id', name:'detail',component: DetailMovie}
    ]
})