var about = Vue.component('about', {
    props: {
        aboutUsSections: {
            default: {}
        }
    },
    methods: {
        loadAboutUsSections: function () {
            showLoader();
            this.$http.get(APIUrl() + 'AdminContent/GetAboutUsSections', {
                headers: {
                    APIKey: config.BusgarageAPIKey
                }
            }).then(
                response => {
                    this.aboutUsSections = response.body;
                    console.log(this.aboutUsSections);

                    hideLoader();
                },
                err => {
                    console.log(err);
                    hideLoader();
                }
            );
        }
    },
    template: `
        <div>
            <navbar></navbar>
            <slider></slider>
            <div class="slider-separator"></div>
            <div class="about-us">
                <div v-for="section in aboutUsSections">
                    <h1>{{ section.About_Us_Section_Title }}</h1>
                    <p>{{ section.About_Us_Section_Content }}</p>
                    <hr />
                </div>
            </div>
        </div>
    `,
    created: function () {
        this.loadAboutUsSections();
    }
});

export default about;