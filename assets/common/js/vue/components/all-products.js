var all_products = Vue.component('all-products', {
    props: ['category', 'page'],
    methods: {
        LogURL: function () {
            console.log(this.$route.params['category'], this.$route.params['page']);
            this.category = this.$route.params['category'];
            this.page = this.$route.params['page'];

            var first = document.getElementById('prev');
            var last = document.getElementById('next');
            if (this.page === '1') {
                first.className += ' first-page';
            }
            else {
                first.className = first.className.replace(/\bfirst-page\b/g, "");
            }
            if (this.page === '4') {
                last.className += ' last-page';
            }
            else {
                last.className = last.className.replace(/\blast-page\b/g, "");
            }
        }
    },
    template: `
        <div>
            <div class="all-products">
                <h1>Categorias</h1>
                <div class="categories">
                    <router-link class="show-all" to="#/all/1">Todos los productos</router-link>

                    <router-link class="" to="/shop/cat1/1">Categoria 1</router-link>
                    <router-link class="" to="/shop/cat2/1">Categoria 2</router-link>
                    <router-link class="" to="/shop/cat3/1">Categoria 3</router-link>
                    <router-link class="" to="/shop/cat4/1">Categoria 4</router-link>
                    <router-link class="" to="/shop/cat5/1">Categoria 5</router-link>
                    <router-link class="" to="/shop/cat6/1">Categoria 6</router-link>
                </div>

                <div class="products">
                    <product-card class="card"></product-card>
                    <product-card class="card"></product-card>
                    <product-card class="card"></product-card>
                    <product-card class="card"></product-card>
                    <product-card class="card"></product-card>
                    <product-card class="card"></product-card>
                    <product-card class="card"></product-card>
                    <product-card class="card"></product-card>
                    <product-card class="card"></product-card>
                    <product-card class="card"></product-card>
                </div>

                <div class="navigation">
                    <i id="prev" class="fas fa-chevron-circle-left"></i>
                    <router-link class="active" v-bind:to="'/shop/' + category + '/1'">1</router-link>
                    <router-link class="" v-bind:to="'/shop/' + category + '/2'">2</router-link>
                    <router-link class="" v-bind:to="'/shop/' + category + '/3'">3</router-link>
                    <router-link class="" v-bind:to="'/shop/' + category + '/4'">4</router-link>
                    <i id="next" class="fas fa-chevron-circle-right"></i>
                </div>
            </div>
        </div>
    `,
    watch: {
        '$route': function (to, from) {
            this.LogURL();
        }
    },
    mounted() {
        this.LogURL();
    }
});

export default all_products;