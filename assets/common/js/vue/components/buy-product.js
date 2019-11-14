var buy_product = Vue.component('buy-product', {
    props: {
        Product_Id: {
            default: 0
        },
        Product: {
            default: {}
        },
        Product_Galery_Images: {
            default: {}
        },
        Related_Products: {
            default: [{}]
        }
    },
    methods: {
        loadProduct: function () {
            this.Product_Id = this.$route.params['Product_Id'];
            showLoader();
            this.$http.get(APIUrl() + `AdminContent/GetProduct/${this.Product_Id}`, {
                headers: {
                    APIKey: config.BusgarageAPIKey
                }
            }).then(
                response => {
                    this.Product = Object.assign(response.body, {
                        Product_Price: formatMoney(response.body.Product_Price),
                        Product_Price_Total: formatMoney(response.body.Product_Price_Total),
                        Product_Disscount: response.body.Product_Disscount + '%',
                        Product_Img: APIUrl() + response.body.Product_Img
                    });
                    this.loadProductGalery();
                    hideLoader();
                },
                err => {
                    console.log(err);
                    error_swal('Error...', 'Error interno estamos trabajando para solucionarlo');
                    hideLoader();
                }
            );
        },
        loadProductGalery: function () {
            showLoader();
            this.$http.get(APIUrl() + `AdminContent/GetProductGaleryImages/${this.Product_Id}`, {
                headers: {
                    APIKey: config.BusgarageAPIKey
                }
            }).then(
                response => {
                    var FrontImage = {
                        Product_Galery_Image_Id: 0,
                        Product_Galery_Image_Img: this.Product.Product_Img,
                        Product_Galery_Image_Order: 0,
                        Product_Id: this.Product.Product_Id
                    };

                    if (response.body.length > 0) {
                        this.Product_Galery_Images = response.body.map(function (x) {
                            x.Product_Galery_Image_Img = APIUrl() + x.Product_Galery_Image_Img;
                            return x
                        });

                        this.Product_Galery_Images = [FrontImage].concat(this.Product_Galery_Images);
                    }
                    else {
                        this.Product_Galery_Images = [FrontImage];
                    }
                    this.loadRealtedProducts();
                    hideLoader();
                },
                err => {
                    console.log(err);
                    error_swal('Error...', 'Error interno estamos trabajando para solucionarlo');
                    hideLoader();
                }
            );
        },
        loadRealtedProducts: function () {
            showLoader();
            this.$http.get(APIUrl() + `AdminContent/Search_Products/${this.Product.Product_Name}`, {
                headers: {
                    APIKey: config.BusgarageAPIKey
                }
            }).then(
                response => {
                    this.Related_Products = response.body.map(function (x) {
                        x.Product_Price = formatMoney(x.Product_Price);
                        x.Product_Price_Total = formatMoney(x.Product_Price_Total);
                        x.Product_Img = APIUrl() + x.Product_Img;
                        return x
                    });
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
            <navbar></navbar>
            <product-information v-bind:Product="Product" v-bind:Galery="Product_Galery_Images" ></product-information>
            <product-display v-bind:title="'Relacionados'" v-bind:Products="Related_Products"></product-display>
        </div>
    `,
    watch: {
        $route: function (to, from) {
            this.loadProduct();
        }
    },
    mounted() {
        this.loadProduct();
    }
});

export default buy_product;