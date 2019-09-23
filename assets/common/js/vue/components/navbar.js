var navbar = Vue.component('navbar', {
    methods: {
        toggleNavbar: function () {
            // Change hamburger to X
            var navbarToggle = document.getElementById('nav-toggle');
            var navList = document.getElementsByClassName('nav-list')[0];
            var searchButton = document.getElementById('search-button');

            if (navbarToggle.className.includes('active')) {
                navbarToggle.className = navbarToggle.className.replace(/\bactive\b/g, "");
                searchButton.className = searchButton.className.replace(/\bactive\b/g, "");
            }
            else {
                navbarToggle.className += ' active';
                searchButton.className += ' active';
            }

            // Show menu
            if (navList.className.includes('active')) {
                navList.style.height = '0px';
                navList.addEventListener('transitionend', function () {
                    navList.className = navList.className.replace(/\bactive\b/g, "");
                }, {
                    once: true
                });
            }
            else {
                navList.className += ' active';
                let height = navList.clientHeight === 0 ? '200px' : navList.clientHeight + "px";
                navList.style.height = '0px';

                setTimeout(function () {
                    navList.style.height = height;
                }, 0);
            }
        }
    },
    template: `
        <div>
            <section class="navigation">
                <div class="nav-container">
                    <div class="brand">
                        <router-link class="" to="/">
                            <img src="./assets//common/img/logo.png" />
                        </router-link>
                    </div>
                    <nav>
                        <div class="nav-mobile"><a v-on:click="toggleNavbar" id="nav-toggle" href="#"><span></span></router-link></div>
                        <ul class="nav-list">
                            <li>
                                <router-link class="" to="/">Home</router-link>
                            </li>
                            <li>
                                <router-link class="" to="/shop">Shop</router-link>
                            </li>
                            <li>
                                <router-link class="" to="/about">About Us</router-link>
                            </li>
                            <li>
                                <router-link class="" to="/kart"><i class="fas fa-shopping-cart"></i></router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <search></search>
        </div>
    `
});

export default navbar;