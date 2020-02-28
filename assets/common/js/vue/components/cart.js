var cart = Vue.component('cart', {
    props: {
        Cart: {
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
        loadCart: function () {
            var ProductIds = this.Cart.map(x => x.Product_Id).join(',');

            showLoader();
            this.$http.get(APIUrl() + `AdminProduct/GetProducts/${ProductIds}`, {
                headers: {
                    APIKey: window.config.APIKey
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
                    
                    for (let i = 0; i < this.Cart.length; i++) {
                        this.Products[i].Product_Cart_Id = i + 1;
                        this.Cart[i].Product_Cart_Id = i + 1;

                        this.Products[i].Product_Configurations = {
                            color: this.Cart[i].Color,
                            size: this.Cart[i].Size,
                        };
                    }
                    localStorage.setItem('Cart', JSON.stringify(this.Cart));
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
            <div class="align-center" v-if="Cart === null || Cart === undefined">
                <h1>Tu carrito de compras esta vacio</h1>
                <img class="w50" src="./assets//common/img/empty-cart.jpg" alt="Empty Cart" />
            </div>
            <div v-else>
                <cart-card v-for="product in Products" v-bind:Product="product"></cart-card>
                <p class="total">Total: <span>{{ Total }}</span></p>
                <router-link to="/checkout" class="go-checkout">Proceder al Pago</router-link>
            </div>
        </div>
    `,
    created: function () {
        this.Cart = JSON.parse(localStorage.getItem('Cart'));
        if (this.Cart !== null) {
            this.loadCart();
        }
    }
});

export default cart;