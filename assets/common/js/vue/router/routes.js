import home from '../components/home.js'
import shop from '../components/shop.js'
import about from '../components/about.js'
import navbar from '../components/navbar.js'
import search from '../components/search.js'
import slider from '../components/slider.js'
import product_display from '../components/product-display.js'
import product_card from '../components/product-card.js'
import ranking from '../components/ranking.js'
import buy_product from '../components/buy-product.js'
import product_information from '../components/product-information.js'
import kart from '../components/kart.js'
import off_banner from '../components/off-banner.js'
import all_products from '../components/all-products.js'
import kart_card from '../components/kart-card.js'
import checkout from '../components/checkout.js'
import payment from '../components/payment.js'
import coming_soon from '../components/coming-soon.js'
import garage_footer from '../components/garage-footer.js'

const routes = [
    {
        path: '/',
        name: 'coming-soon',
        component: coming_soon
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/shop/:category?/:page?',
        name: 'shop',
        component: shop
    },
    {
        path: '/about',
        name: 'about',
        component: about
    },
    {
        path: '/buy',
        name: 'buy',
        component: buy_product
    },
    {
        path: '/kart',
        name: 'kart',
        component: kart
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: checkout
    },
    {
        path: '/payment',
        name: 'payment',
        component: payment
    }
];

const router = new VueRouter({
    routes
});

export default router;