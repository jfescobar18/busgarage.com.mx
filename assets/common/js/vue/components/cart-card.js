var cart_card = Vue.component('cart-card', {
    props: {
        Product: {
            default: {}
        },
        htmlConfig: {
            default: ''
        }
    },
    methods: {
        formatConfiguration: function () {
            if (this.Product.Product_Configurations.color.length > 0) {
                this.htmlConfig += `<li>Color: <i style="border: solid #bababa 1px; color: #${this.Product.Product_Configurations.color}" class="fa fa-square"></i></li>`;
            }

            if (this.Product.Product_Configurations.size.length > 0) {
                this.htmlConfig += `<li>Tamaño/Talla: ${this.Product.Product_Configurations.size}</li>`;
            }
        },
        deleteFromCart: function () {
            var Cart = JSON.parse(localStorage.getItem('Cart'));
            var Product_Cart_Id = this.Product.Product_Cart_Id

            var Cart = Cart.filter(function (product) {
                return product.Product_Cart_Id !== Product_Cart_Id;
            });

            if (Cart.length == 0) {
                localStorage.setItem('Cart', null);
                this.$router.push("/Shop");
            }
            else {
                localStorage.setItem('Cart', JSON.stringify(Cart));
            }

            window.location.reload();
        }
    },
    template: `
        <div>
             <div class="cart-card">
                <div class="image-card">
                    <img v-bind:src="Product.Product_Img" />
                </div>
                <div class="info-card">
                    <span class="category">{{ Product.Category_Name }}</span>
                    <span class="name">{{ Product.Product_Name }}</span>
                    <span class="price">{{ Product.Product_Price_Total }}</span>
                    <span style="display: none;" class="quantity">x2</span>
                </div>
                <div class="configuration-card">
                    <p className="description">{{Product.Product_Description }}</p>
                    <p className="configuration">
                        Opciones:
                        <ul v-html="htmlConfig">
                        </ul>
                    </p>
                    <div class="delete">
                        <button v-on:click="deleteFromCart" type="button" class=""><i class="fas fa-trash-alt"></i>&nbsp;Eliminar</button>
                    </div>
                </div>
             </div>
             <hr class="cart-end" />
        </div>
    `,
    mounted() {
        this.formatConfiguration();
    }
});

export default cart_card;