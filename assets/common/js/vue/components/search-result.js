var search_result = Vue.component('search-result', {
    props: {
        SearchWord: {
            default: ''
        }
    },
    template: `
        <div>
            <navbar></navbar>
            <slider></slider>
            <div class="slider-separator"></div>
            <all-products v-bind:SearchWord="SearchWord"></all-products>
        </div>
    `,
    created: function () {
        this.SearchWord = this.$route.params['SearchWord'];
    },
    watch: {
        '$route': function (to, from) {
            this.SearchWord = this.$route.params['SearchWord'];
        }
    },
});

export default search_result;