var slider = Vue.component('slider', {
    props: ['Slider'],
    methods: {
        loadSlider: function () {
            showLoader();
            this.$http.get(APIUrl() + 'AdminContent/GetSliderImages', {
                headers: {
                    APIKey: config.BusgarageAPIKey
                }
            }).then(
                response => {
                    this.Slider = response.body.map(function (x) {
                        x.Slider_Image_Img = APIUrl() + x.Slider_Image_Img;
                        return x
                    });
                    hideLoader();
                },
                err => {
                    console.log(err);
                    hideLoader();
                }
            );
        },
    },
    template: `
        <div class="slider-container">
            <div data-am-gallery>
                <input v-for="(slide, index) in Slider" type="radio" name="gallery" v-bind:id="'img-' + index + 1" v-bind:checked="index === 0 ? 'checked' : ''" />
                <div class="images">
                    <div v-for="slide in Slider" class="image" v-bind:style="'background-image: url(' + slide.Slider_Image_Img + ');'"></div>
                </div>
                <div class="navigation">
                    <label v-for="(slide, index) in Slider" class="dot" v-bind:for="'img-' + index + 1"></label>
                </div>
            </div>
        </div>
    `,
    created: function () {
        this.loadSlider();
    }
});

export default slider;