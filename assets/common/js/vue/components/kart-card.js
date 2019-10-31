var kart_card = Vue.component('kart-card', {
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
        deleteFromKart: function () {
            var Kart = JSON.parse(localStorage.getItem('Kart'));
            var Product_Kart_Id = this.Product.Product_Kart_Id

            var Kart = Kart.filter(function (product) {
                return product.Product_Kart_Id !== Product_Kart_Id;
            });

            if (Kart.length == 0) {
                localStorage.setItem('Kart', null);
                this.$router.push("/Shop");
            }
            else {
                localStorage.setItem('Kart', JSON.stringify(Kart));
            }

            window.location.reload();
        }
    },
    template: `
        <div>
             <div class="kart-card">
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
                        <button v-on:click="deleteFromKart" type="button" class=""><i class="fas fa-trash-alt"></i>&nbsp;Eliminar</button>
                    </div>
                </div>
             </div>
             <hr class="kart-end" />
        </div>
    `,
    mounted() {
        this.formatConfiguration();
    }
});

export default kart_card;