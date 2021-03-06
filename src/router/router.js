import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/home.vue';
import Member from '@/components/member/member.vue';
import ShopCart from '@/components/shopCart/shopCart.vue';
import Search from '@/components/search/search.vue';

import NewsList from '@/components/news/newsList.vue';
import NewsDetail from '@/components/news/newsDetail.vue';

import PhotoShare from '@/components/photoShare/photoShare.vue';
import PhotoDetail from '@/components/photoShare/photoDetail.vue';

import Goodslistl from '@/components/goods/goodsList.vue';
import GoodsDetail from '@/components/goods/goodsDetail.vue';
import GoodsComment from '@/components/goods/goodsComment.vue';


Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", redirect: { name: "home" } },//重定向
    { name: "home", path: "/home", component: Home },
    { name: "member", path: "/member", component: Member },
    { name: "shopCart", path: "/shopCart", component: ShopCart },
    { name: "search", path: "/search", component: Search },
    { name: "news.list", path: "/news/list", component: NewsList },
    { name: "news.detail", path: "/news/detail", component: NewsDetail },

    { name:'photo.share', path: "/photo/share", component: PhotoShare },
    { name:'photo.detail', path: "/photo/detail/:id", component: PhotoDetail },
    // 商品展示列表
    { name:'goods.list', path: "/goods/list", component: Goodslistl },
    { name:'goods.detail', path: "/goods/detail", component: GoodsDetail},
    { name:'goods.comment', path: "/goods/comment", component: GoodsComment},
    { name:'goods.pictureInfo', path: "/goods/pictureInfo", component: NewsDetail},

  ]
})
