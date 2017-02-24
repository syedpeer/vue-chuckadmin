import Vue from 'vue'
import VueRouter from 'vue-router'

// Import components
import home from '../components/home.vue'
import page from '../components/pages/page.vue'
import user from '../components/user/user.vue'
import userhome from '../components/user/userHome.vue'
import userprofile from '../components/user/userProfile.vue'


Vue.use(VueRouter)


var routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/page/:id',
        name:'page',
        component: page,
        props : true
    },
    {
        path: '/user/:id',
        name:'user',
        component: user,
        props: true,
        children : [
            {
                path: '',
                name: 'user-home',
                component: userhome,
                props: true
            },
            {
                path: 'profile',
                name: 'user-profile',
                component: userprofile,
                props: true
            }
        ]
    }
];


export default new VueRouter({
    mode: 'history',
    routes: routes
});