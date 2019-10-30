var all_products = Vue.component('all-products', {
    props: ['category', 'page', 'AllProducts'],
    methods: {
        LogURL: function () {
            console.log(this.$route.params['category'], this.$route.params['page']);
            this.category = this.$route.params['category'];
            this.page = this.$route.params['page'];

            var first = document.getElementById('prev');
            var last = document.getElementById('next');
            if (this.page === '1' || this.page === undefined) {
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
        },
        loadAllProducts: function () {
            showLoader();
            this.$http.get(APIUrl() + 'AdminContent/GetAllProducts', {
                headers: {
                    APIKey: config.BusgarageAPIKey
                }
            }).then(
                response => {
                    if (response.body.length > 0) {
                        this.AllProducts = response.body.map(function (x) {
                            x.Product_Price = formatMoney(x.Product_Price);
                            x.Product_Price_Total = formatMoney(x.Product_Price_Total);
                            x.Product_Img = APIUrl() + x.Product_Img;
                            return x
                        });
                    }
                    hideLoader();
                },
                err => {
                    console.log(err);
                    error_swal('Error...', 'Error interno estamos trabajando para solucionarlo');
                    hideLoader();
                }
            );
        }
    },
    template: `
        <div>
            <div class="all-products">
                <h1>Categorias</h1>
                <div class="categories">
                    <router-link class="show-all" to="/shop/all/1">Todos los productos</router-link>

                    <router-link class="" to="/shop/cat1/1">Categoria 1</router-link>
                    <router-link class="" to="/shop/cat2/1">Categoria 2</router-link>
                    <router-link class="" to="/shop/cat3/1">Categoria 3</router-link>
                    <router-link class="" to="/shop/cat4/1">Categoria 4</router-link>
                    <router-link class="" to="/shop/cat5/1">Categoria 5</router-link>
                    <router-link class="" to="/shop/cat6/1">Categoria 6</router-link>
                </div>

                <div class="products">
                    <product-card v-for="product in AllProducts" v-bind:Product="product" class="card"></product-card>
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
        this.loadAllProducts();
    }
});

export default all_products;