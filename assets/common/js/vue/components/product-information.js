var product_information = Vue.component('product-information', {
    props: {
        Product: {
            default: {}
        },
        Galery: {
            default: {}
        },
        Configuration: {
            default: {
                color: [],
                size: []
            }
        },
        KartItem: {
            default: {
                Product_Id: 0,
                Price: 0,
                Color: '',
                Size: ''
            }
        },
        displayColorMessage: {
            default: 'none'
        },
        displaySizeMessage: {
            default: 'none'
        }
    },
    methods: {
        initSlick: function () {
            for (let i = 0; i < this.Galery.length; i++) {
                $('.product-galery').not('.slick-initialized').slick({
                    dots: true,
                    infinite: false,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                });
            }
        },
        selectOnlyThis: function (id) {
            var OptionType = id.replace(/\d/g, '');
            var LabelType = 'lbl' + OptionType;
            var LabelId = LabelType + id.replace(OptionType, '');

            var iterations = this.Configuration.color.length > this.Configuration.size.length ? this.Configuration.color.length : this.Configuration.size.length

            for (var i = 0; i < iterations; i++) {
                try {
                    document.getElementById(OptionType + i).checked = false;
                    let label = document.getElementById(LabelType + i);
                    label.className = label.className.replace(/\bactive\b/g, '');
                } catch (error) {
                    console.log(error);
                }
            }
            document.getElementById(id).checked = true;
            document.getElementById(LabelId).className += ' active';

            if (id.includes('OptColor')) {
                this.KartItem.Color = document.getElementById(id).value;
            }
            else {
                this.KartItem.Size = document.getElementById(id).value;
            }
        },
        addtoKart: function () {
            var addProductToKart = true;

            this.KartItem.Product_Id = this.Product.Product_Id;
            this.KartItem.Product_Name = this.Product.Product_Name;
            this.KartItem.Price = this.Product.Product_Price_Total.replace('$', '').replace(',', '');

            if (this.Configuration.color.length > 0 && this.KartItem.Color.length == 0) {
                this.displayColorMessage = 'initial';
                addProductToKart = false;
            }

            if (this.Configuration.size.length > 0 && this.KartItem.Size.length == 0) {
                this.displaySizeMessage = 'initial';
                addProductToKart = false;
            }

            if (addProductToKart) {
                var Kart = JSON.parse(localStorage.getItem('Kart'));

                if (Kart === null || Kart === undefined) {
                    Kart = [this.KartItem];
                    localStorage.setItem('Kart', JSON.stringify(Kart));
                }
                else {
                    Kart.push(this.KartItem);
                    localStorage.setItem('Kart', JSON.stringify(Kart));
                }
                this.$router.push("/Kart");
            }
        }
    },
    template: `
        <div>
            <div class="product-information">
                <h1>{{ Product.Product_Name }}</h1>
                <div class="product-container">
                    <div class="product-galery">
                        <img v-for="image in Galery" v-bind:src="image.Product_Galery_Image_Img"  />
                    </div>
                    <div class="product-config">
                        <h2>{{ Product.Product_Price_Total }}
                            <small><br />Envío gratis en todos nuestros productos</small>
                        </h2>
                        <p>{{ Product.Product_Description }}</p>
                        <form v-on:submit.prevent="addtoKart">
                            <div v-if="Configuration.color.length > 0">
                                <h2>Color</h2>
                                <p v-bind:style="'display: ' + displayColorMessage">Selecciona una opción</p>
                                <div class="color-container">
                                    <label v-for="(color, index) in Configuration.color" v-bind:id="'lblOptColor' + index" v-bind:htmlFor="'OptColor' + index" class="" v-bind:style="'color: #' + color">    
                                        <input type="checkbox" v-bind:id="'OptColor' + index" v-bind:value="color" v-on:click="selectOnlyThis('OptColor' + index)" />
                                    </label>
                                </div>
                            </div>
                            <div v-if="Configuration.size.length > 0">
                                <h2>Tamaño/Talla</h2>
                                <p v-bind:style="'display: ' + displaySizeMessage">Selecciona una opción</p>
                                <div class="size-container">
                                    <label v-for="(size, index) in Configuration.size" v-bind:id="'lblOptSize' + index" v-bind:htmlFor="'OptSize' + index" class="">
                                        {{size}}    
                                        <input type="checkbox" v-bind:id="'OptSize' + index" v-bind:value="size" v-on:click="selectOnlyThis('OptSize' + index)" />
                                    </label>
                                </div>
                            </div>
                            <button type="submit" >Agregar al Carrito <i class="fas fa-shopping-cart"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `,
    updated() {
        this.initSlick();
    },
    watch: {
        Product: function (newVal, oldVal) {
            this.Configuration = JSON.parse(this.Product.Product_Configurations);
        }
    }
});

export default product_information;