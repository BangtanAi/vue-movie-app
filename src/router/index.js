import {createRouter, createWebHistory} from 'vue-router'
import Main from '../components/Main'
import FilmDetail from '../components/FilmDetail'
import FilmsLayout from '../components/FilmsLayout'
import Films from '../components/Films'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main,
        },
        {
            path: '/films',
            name: 'filmlayout',
            component: FilmsLayout,
            children: [
                {
                    path: '',
                    name: 'films',
                    component: Films
                },
                {
                    path: ':id',
                    name: 'detail',
                    component: FilmDetail
                }
            ]
        }
    ]
})