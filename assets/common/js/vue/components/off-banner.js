var off_banner = Vue.component('off-banner', {
    props: {
        Banner: {
            default: {}
        }
    },
    methods: {
        loadBanner: function () {
            showLoader();
            this.$http.get(APIUrl() + 'AdminContent/GetOffersImage', {
                headers: {
                    APIKey: window.config.APIKey
                }
            }).then(
                response => {
                    if (response.body.length > 0) {
                        this.Banner = response.body.map(function (x) {
                            x.Offers_Banner_Img = APIUrl() + x.Offers_Banner_Img;
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
        }
    },
    template: `
        <div>
            <div v-for="banner in Banner" class="body-banner" v-bind:style="'background-image: url(' + banner.Offers_Banner_Img + ');'">
                <div class="content">
                    <h1>Descubre las ofertas</h1>
                    <a href="#">IR</a>
                </div>
            </div>
        </div>
    `,
    mounted: function () {
        this.loadBanner();
    }
});

export default off_banner;