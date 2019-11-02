var product_display = Vue.component('product-display', {
    props: {
        title: {
            default: ''
        },
        Products: {
            default: {}
        }
    },
    methods: {
        initSlick: function () {
            if ($('.cards').hasClass('slick-initialized')) {
                $('.cards').slick('destroy');
            }

            $('.cards').not('.slick-initialized').slick({
                dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }
    },
    template: `
        <div>
            <div class="product-display">
                <h1>{{ title }}</h1>
                <div class="cards">
                    <product-card v-for="product in Products" v-bind:Product="product"></product-card>
                </div>
            </div>
        </div>
    `,
    created() {
        this.initSlick();
    },
    updated() {
        this.initSlick();
    }
});

export default product_display;