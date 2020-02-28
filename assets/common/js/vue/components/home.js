var home = Vue.component('home', {
    props: {
        NewProducts: {
            default: {}
        },
        SoonProducts: {
            default: {}
        }
    },
    methods: {
        loadNewProducts: function () {
            showLoader();
            this.$http.get(APIUrl() + 'AdminProduct/GetNew_Products', {
                headers: {
                    APIKey: window.config.APIKey
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
        loadSoonProducts: function () {
            showLoader();
            this.$http.get(APIUrl() + 'AdminProduct/GetSoon_Products', {
                headers: {
                    APIKey: window.config.APIKey
                }
            }).then(
                response => {
                    if (response.body.length > 0) {
                        this.SoonProducts = response.body.map(function (x) {
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
        },
    },
    template: `
        <div>
            <navbar></navbar>
            <slider></slider>
            <div class="slider-separator"></div>
            <product-display v-bind:title="'Nuevos Lanzamientos'" v-bind:Products="NewProducts"></product-display>
            <off-banner></off-banner>
            <product-display v-bind:title="'Proximamente'" v-bind:Products="SoonProducts"></product-display>
        </div>
    `,
    created: function () {
        this.loadNewProducts();
        this.loadSoonProducts();
    },
    updated: function () {
        if (this.NewProducts.length === 0) {
            this.loadNewProducts();
        }
        if (this.SoonProducts.length === 0) {
            this.loadSoonProducts();
        }


    }
});

export default home;