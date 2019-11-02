var shop = Vue.component('shop', {
    props: {
        NewProducts: {
            default: {}
        },
        DiscountProducts: {
            default: {}
        }
    },
    methods: {
        loadNewProducts: function () {
            showLoader();
            this.$http.get(APIUrl() + 'AdminContent/GetNew_Products', {
                headers: {
                    APIKey: config.BusgarageAPIKey
                }
            }).then(
                response => {
                    if (response.body.length > 0) {
                        this.NewProducts = response.body.map(function (x) {
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
                    hideLoader();
                }
            );
        },
        loadDiscountProducts: function () {
            showLoader();
            this.$http.get(APIUrl() + 'AdminContent/GetDiscount_Products', {
                headers: {
                    APIKey: config.BusgarageAPIKey
                }
            }).then(
                response => {
                    if (response.body.length > 0) {
                        this.DiscountProducts = response.body.map(function (x) {
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
                    hideLoader();
                }
            );
        }
    },
    template: `
        <div>
            <navbar></navbar>
            <slider></slider>
            <div class="slider-separator"></div>
            <product-display v-bind:title="'Nuevos Lanzamientos'" v-bind:Products="NewProducts"></product-display>
            <product-display v-bind:title="'Ofertas'" v-bind:Products="DiscountProducts"></product-display>
            <all-products></all-products>
        </div>
    `,
    created: function () {
        this.loadNewProducts();
        this.loadDiscountProducts();
    },
    mounted: function () {
        this.loadNewProducts();
        this.loadDiscountProducts();
    },
    watch: {
        '$route': function (to, from) {
            this.loadNewProducts();
            this.loadDiscountProducts();
        }
    },
});

export default shop;