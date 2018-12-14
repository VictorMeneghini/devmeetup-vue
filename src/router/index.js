import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import CreateMeetup from '../components/Meetup/CreateMeetup';
import Meetups from '../components/Meetup/Meetups';
import Profile from '../components/User/Profile';
import Signin from '../components/User/Signin';
import Signup from '../components/User/Signup';

Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/CreateMeetup',
            name: 'CreateMeetup',
            component: CreateMeetup,
        },
        {
            path: '/Meetups',
            name: 'Meetups',
            component: Meetups,
        }
        ,{
            path: '/Profile',
            name: 'Profile',
            component: Profile,
        }
        ,{
            path: '/Signin',
            name: 'Signin',
            component: Signin,
        }
        ,{
            path: '/Signup',
            name: 'Signup',
            component: Signup,
        }
    ]
});