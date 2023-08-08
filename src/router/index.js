import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [

    {
        path: '/',
        name: 'home',
        component: HomeView

    },

    // {
    //     path: '/about',
    //     name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }


    //intro
    {
        path:'/intro',
        name: 'introduce',
        component: () => import('../views/introduce.vue')
    },
    {
        path:'/camNang',
        name: 'CamNang',
        component: () => import('../views/CamNang.vue')
    },
    {
        path:'/Tour',
        name: 'tour',
        component: () => import('../views/Tour.vue')
    },
    {
        path:'/Tour/FestivalHoa',
        name: 'festivalHoa',
        component: () => import('../Tour/FestivalHoa.vue')
    },
    {
        path:'/Tour/DalatSanMay',
        name: 'DalatSanMay',
        component: () => import('../Tour/DalatSanMay.vue')
    },
    {
        path:'/Tour/DuLichDaLatNgamHoa',
        name: 'DuLichDaLatNgamHoa',
        component: () => import('../Tour/DuLichDaLatNgamHoa.vue')
    },
    {
        path:'/Tour/TaDungDalat',
        name: 'TaDungDalat',
        component: () => import('../Tour/TaDungDalat.vue')
    },
    {
        path:'/Tour/DLHoaSonDienTrang',
        name: 'DLHoaSonDienTrang',
        component: () => import('../Tour/DLHoaSonDienTrang.vue')
    },
    {
        path:'/Tour/DL_NhaTrang30/4-1/5',
        name: 'DL_NhaTrang30415',
        component: () => import('../Tour/DL_NhaTrang30415.vue')
    },
    {
        path:'/Tour/HanhHuongBaoLoc-DaLat',
        name: 'HanhHuongBL_DL',
        component: () => import('../Tour/HanhHuongBL_DL.vue')
    },
    {
        path:'/Tour/BaoLocThapCanhChua',
        name: 'BaoLocThapCanhChua',
        component: () => import('../Tour/BaoLocThapCanhChua.vue')
    },
    {
        path:'/Tour/DaLatTour4ngay3dem',
        name: 'DaLatTour4ngay3dem',
        component: () => import('../Tour/DL4N3D30415.vue')
    },



    //hotel
    {
        path:'/hotel',
        name: 'hotel',
        component: () => import('../HotelView/hotelALL.vue')
    },
    {
        path:'/colline',
        name: 'hotelcolline',
        component: () => import('../HotelView/collineView.vue')
    },
    {
        path:'/lerecitboutique',
        name: 'lerecitboutique',
        component: () => import('../HotelView/boutiqueView.vue')
    },
    {
        path:'/demaat',
        name: 'demaat',
        component: () => import('../HotelView/demaatView.vue')
    },
    // {
    //     path:'/',
    //     name: 'hotel',
    //     component: () => import('../HotelView/View.vue')
    // },
    // {
    //     path:'/',
    //     name: 'hotel',
    //     component: () => import('../HotelView/View.vue')
    // },
    // {
    //     path:'/',
    //     name: 'hotel',
    //     component: () => import('../HotelView/View.vue')
    // },
    // {
    //     path:'/',
    //     name: 'hotel',
    //     component: () => import('../HotelView/View.vue')
    // },
    // {
    //     path:'/',
    //     name: 'hotel',
    //     component: () => import('../HotelView/View.vue')
    // },
    // {
    //     path:'/',
    //     name: 'hotel',
    //     component: () => import('../HotelView/View.vue')
    // },
    // {
    //     path:'/',
    //     name: 'hotel',
    //     component: () => import('../HotelView/View.vue')
    // },


    //dich vu
    {
        path:'/service',
        name: 'service',
        component: () => import('../views/serviceView.vue')
    },
    {
        path:'/service/thueoto',
        name: 'service/thueoto',
        component: () => import('../serviceView/thueoto.vue')
    },
    {
        path:'/service/thuexemay',
        name: 'service/thuexemay',
        component: () => import('../serviceView/thuexemay.vue')
    },
    {
        path:'/service/thuegiuongnam',
        name: 'service/thuegiuongnam',
        component: () => import('../serviceView/thuegiuongnam.vue')
    },
   

    //tin tuc
    {
        path:'/news',
        name: 'news',
        component: () => import('../views/newsView.vue')
    },

    //lien he
    {
        path:'/contact',
        name: 'contact',
        component: () => import('../views/contactView.vue')
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    HomeView
})

export default router
