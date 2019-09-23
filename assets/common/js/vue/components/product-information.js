var product_information = Vue.component('product-information', {
    methods: {
        initSlick: function () {
            $('.product-galery').not('.slick-initialized').slick({
                dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        },
        selectOnlyThis: function (id) {
            var OptionType = id.replace(/\d/g, '');
            var LabelType = 'lbl' + OptionType;
            var LabelId = LabelType + id.replace(OptionType, '');
            
            for (var i = 1; i <= 4; i++) {
                document.getElementById(OptionType + i).checked = false;
                let label = document.getElementById(LabelType + i);
                label.className = label.className.replace(/\bactive\b/g, '');
            }
            document.getElementById(id).checked = true;
            document.getElementById(LabelId).className += ' active';
        }
    },
    template: `
        <div>
            <div class="product-information">
                <h1>Name</h1>
                <div class="product-container">
                    <div class="product-galery">
                        <img src="./assets/common/img/product1.jpg" />
                        <img src="./assets/common/img/product1.jpg" />
                        <img src="./assets/common/img/product1.jpg" />
                        <img src="./assets/common/img/product1.jpg" />
                        <img src="./assets/common/img/product1.jpg" />
                    </div>
                    <div class="product-config">
                        <h2>$100</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus exercitationem sint sunt cum labore. Aperiam autem veritatis facere ipsa. Eum modi quas suscipit consectetur molestiae vero! Porro veniam ducimus corporis.</p>
                        <form action="">
                            <h2>Option</h2>
                            <div class="size-container">
                                <label id="lblOptSize1" htmlFor="OptSize1" class="">
                                    S
                                    <input type="checkbox" id="OptSize1" value="Value1" v-on:click="selectOnlyThis('OptSize1')" />
                                </label>
                                <label id="lblOptSize2" htmlFor="OptSize2" class="">
                                    L
                                    <input type="checkbox" id="OptSize2" value="Value1" v-on:click="selectOnlyThis('OptSize2')" />
                                </label>
                                <label id="lblOptSize3" htmlFor="OptSize3" class="">
                                    M
                                    <input type="checkbox" id="OptSize3" value="Value1" v-on:click="selectOnlyThis('OptSize3')" />
                                </label>
                                <label id="lblOptSize4" htmlFor="OptSize4" class="">
                                    XL
                                    <input type="checkbox" id="OptSize4" value="Value1" v-on:click="selectOnlyThis('OptSize4')" />
                                </label>
                            </div>
                            <h2>Option</h2>
                            <div class="color-container">
                                <label id="lblOptColor1" htmlFor="OptColor1" class="" style="color: #fff">    
                                    <input type="checkbox" id="OptColor1" value="Value1" v-on:click="selectOnlyThis('OptColor1')" />
                                </label>
                                <label id="lblOptColor2" htmlFor="OptColor2" class="" style="color: #000">
                                    <input type="checkbox" id="OptColor2" value="Value1" v-on:click="selectOnlyThis('OptColor2')" />
                                </label>
                                <label id="lblOptColor3" htmlFor="OptColor3" class="" style="color: #89c630">
                                    <input type="checkbox" id="OptColor3" value="Value1" v-on:click="selectOnlyThis('OptColor3')" />
                                </label>
                                <label id="lblOptColor4" htmlFor="OptColor4" class="" style="color: #d93e37">
                                    <input type="checkbox" id="OptColor4" value="Value1" v-on:click="selectOnlyThis('OptColor4')" />
                                </label>
                            </div>
                            <button type="submit" >Agregar al Carrito <i class="fas fa-shopping-cart"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `,
    mounted() {
        this.initSlick();
    }
});

export default product_information;