/* eslint-disable */
import { createRouter, createWebHistory, START_LOCATION } from 'vue-router';

// COMPONENTS
import Home from './components/Home';
import pg2 from './components/Header/pg.vue';
import pg3 from './components/Header/pg2.vue';
import pg4 from './components/Header/pg3.vue';


const routes = createRouter({
    history: createWebHistory(),
    routes:[
        { path:'/', component: Home, name:'home'},
        { path:'/mb2', component: pg2, name:'mbt2'},
        { path:'/mb3', component: pg3, name:'mbt3'},
        { path:'/mb4', component: pg4, name:'mbt4'}
    ]
})


export default routes;