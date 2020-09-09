import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/page/index.vue'
import notice from '@/page/notice.vue'
import video from '@/page/video.vue'
import FAQ from '@/page/FAQ.vue'
import aboutUs from '@/page/aboutUs.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'indexPage',
            component: indexPage
        },
        {
            path: '/drawNotice',
            name: 'drawNotice',
            component: notice
        },
        {
            path: '/lotteryVideo',
            name: 'lotteryVideo',
            component: video
        },
        {
            path: '/FAQ',
            name: 'FAQ',
            component: FAQ
        },
        {
            path: '/aboutUs',
            name: 'aboutUs',
            component: aboutUs
        }
    ]
})