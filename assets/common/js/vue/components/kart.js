var kart = Vue.component('kart', {
    props: {
        Kart: {
            default: {}
        },
        Products: {
            default: {}
        },
        Total: {
            default: ''
        }
    },
    methods: {
        loadKart: function () {
            var ProductIds = this.Kart.map(x => x.Product_Id).join(',');

            showLoader();
            this.$http.get(APIUrl() + `AdminContent/GetProducts/${ProductIds}`, {
                headers: {
                    APIKey: config.BusgarageAPIKey
                }
            }).then(
                response => {
                    this.Total = formatMoney(
                        response.body.reduce(function (sum, product) {
                            return sum + product.Product_Price_Total;
                        }, 0)
                    );

                    this.Products = response.body.map(function (x) {
                        x.Product_Price = formatMoney(x.Product_Price);
                        x.Product_Price_Total = formatMoney(x.Product_Price_Total);
                        x.Product_Img = APIUrl() + x.Product_Img;
                        return x
                    });
                    
                    for (let i = 0; i < this.Kart.length; i++) {
                        this.Products[i].Product_Kart_Id = i + 1;
                        this.Kart[i].Product_Kart_Id = i + 1;

                        this.Products[i].Product_Configurations = {
                            color: this.Kart[i].Color,
                            size: this.Kart[i].Size,
                        };
                    }
                    localStorage.setItem('Kart', JSON.stringify(this.Kart));
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
            <div class="align-center" v-if="Kart === null || Kart === undefined">
                <h1>Tu carrito de compras esta vacio</h1>
                <img src="./assets//common/img/sadVW.jpg" />
            </div>
            <div v-else>
                <kart-card v-for="product in Products" v-bind:Product="product"></kart-card>
                <p class="total">Total: <span>{{ Total }}</span></p>
                <router-link to="/checkout" class="go-checkout">Proceder al Pago</router-link>
            </div>
        </div>
    `,
    created: function () {
        this.Kart = JSON.parse(localStorage.getItem('Kart'));
        if (this.Kart !== null) {
            this.loadKart();
        }
    }
});

export default kart;